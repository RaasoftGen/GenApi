'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var uuid = require('uuid');
var CryptoJS = require('crypto-js');
var jsencrypt = require('jsencrypt');

class EventBus {
  events = {};
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  emit(eventName, ...args) {
    const callbacks = this.events[eventName];
    if (!callbacks || callbacks.length === 0) {
      return false;
    }
    for (const callback of callbacks) {
      callback(...args);
    }
    return true;
  }
  off(eventName, callback) {
    const callbacks = this.events[eventName];
    if (!callbacks || callbacks.length === 0) {
      return false;
    }
    if (callback) {
      for (let i = callbacks.length - 1; i >= 0; i--) {
        if (callbacks[i] === callback) {
          callbacks.splice(i, 1);
        }
      }
    } else {
      this.events[eventName].length = 0;
    }
    return true;
  }
  offAll() {
    Object.keys(this.events).forEach(eventName => {
      this.off(eventName);
    });
  }
}
class EventBusHandler {
  constructor() {
    this.eventBus = new EventBus();
  }
  sendEvent(eventName, ...args) {
    this.eventBus.emit(eventName, ...args);
  }
  addEventListener(eventName, callback, removeExisting = true) {
    if (removeExisting) {
      this.eventBus.off(eventName, callback);
    }
    this.eventBus.on(eventName, callback);
  }
  removeEventListener(eventName, callback) {
    this.eventBus.off(eventName, callback);
  }
  removeAllEventListener() {
    this.eventBus.offAll();
  }
}
class MessageFormat {
  constructor(header, payload, isEncrypt = false, token = '') {
    this.Header = header;
    this.Payload = payload;
    this.IsEncrypt = isEncrypt;
    this.Token = token;
  }
}
class WARPJsonFormat {
  constructor(name, tag, dataParameter) {
    this.Name = name;
    this.Tag = tag;
    this.DataParameter = dataParameter;
  }
}
class Caller {
  constructor(name, callback) {
    this.name = name;
    this.callBack = callback;
  }
}
function generateUUID() {
  return uuid.v4();
}

/**
 * Base class for all ATM device controllers
 * This class provides common functionality like event handling and communication
 */
class DeviceBase {
  dataCallback = null;
  constructor(className) {
    this.className = className;
    this.eventHandler = new EventBusHandler();
  }

  /**
   * Register a function to receive device events
   * @param dataCallback - Function to handle device responses
   */
  addListener(dataCallback) {
    this.dataCallback = dataCallback;
    this.eventHandler.addEventListener(this.className, dataCallback);
  }

  /**
   * Unregister the event listener
   */
  removeListener() {
    if (this.dataCallback) {
      this.eventHandler.removeEventListener(this.className, this.dataCallback);
      this.dataCallback = null;
    }
  }

  /**
   * Send a command to the device
   * @param command - Command name
   * @param parameters - Command parameters
   */
  sendCommand(command, parameters = {}) {
    const message = {
      Command: command,
      RequestId: generateUUID(),
      DeviceName: this.className,
      Timestamp: new Date().toISOString(),
      ...parameters
    };

    // This would be sent through the WebSocket connection
    console.log(`Sending command to ${this.className}:`, message);

    // Simulate sending through WebSocket
    this.simulateCommand(message);
  }

  /**
   * In a class that extends DeviceBase, add eventCallback handling according to the class
   * @param obj - Response object
   */

  /**
   * Simulate command execution for testing
   * In real implementation, this would go through WebSocket
   */
  simulateCommand(message) {
    // Simulate response after delay
    setTimeout(() => {
      const response = {
        Command: message.Command + 'Completed',
        RequestId: message.RequestId,
        DeviceName: this.className,
        Detail: 'OK',
        Timestamp: new Date().toISOString()
      };
      this.handleResponse(response);
    }, 100);
  }

  /**
   * Handle response from device
   */
  handleResponse(response) {
    // First, try device-specific handler
    const handled = this.othersEventCallback(response);

    // If not handled and we have a callback, call it
    if (!handled && this.dataCallback) {
      this.dataCallback(response);
    }
  }
}

/**
 * @group API
 * @description This class controls the receipt printer device in an ATM.
 * To control the device, this class consists of event listeners, control commands.
 * As the methods are asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an `addListener` before calling a method.
 * When it finishes controlling the device, it should `removeListener` to stop receiving responses.
 * Also, some inquiry methods have parameters like a callback function to receive the result.
 */
class ReceiptPrinter extends DeviceBase {
  constructor() {
    super('ReceiptPrinter');
  }
  othersEventCallback(obj) {
    // Handle receipt printer specific events
    switch (obj.Command) {
      case 'PrintCompleted':
        console.log('Print operation completed:', obj);
        return true;
      case 'EjectMediaCompleted':
        console.log('Eject operation completed:', obj);
        return true;
      case 'ResetDeviceCompleted':
        console.log('Reset operation completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to print a receipt.
   * As the result of printing, `PrintCompleted` will be sent.
   *
   * @param printData - Array of strings to print
   * @param skipPrintHeaderImage - Skip printing header image
   * @param headerImageData - Base64 encoded header image
   * @param taillmageData - Base64 encoded tail image
   */
  print({
    printData,
    skipPrintHeaderImage,
    headerImageData,
    taillmageData
  }) {
    this.sendCommand('Print', {
      printData,
      skipPrintHeaderImage,
      headerImageData,
      taillmageData
    });
  }

  /**
   * A function to print a receipt with eject.
   * As the result of printing, `PrintCompleted` will be sent.
   *
   * @param printData - Array of strings to print
   * @param skipPrintHeaderImage - Skip printing header image
   * @param headerImageData - Base64 encoded header image
   * @param taillmageData - Base64 encoded tail image
   */
  printWithEject({
    printData,
    skipPrintHeaderImage,
    headerImageData,
    taillmageData
  }) {
    this.sendCommand('PrintWithEject', {
      printData,
      skipPrintHeaderImage,
      headerImageData,
      taillmageData
    });
  }

  /**
   * A function to eject a receipt.
   * As the result of ejecting, `EjectMediaCompleted` will be sent.
   */
  eject() {
    this.sendCommand('EjectMedia');
  }

  /**
   * A function to reset receipt device.
   * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
   *
   * @param action - Define device reset action.
   */
  reset(action) {
    this.sendCommand('ResetDevice', {
      action
    });
  }

  /**
   * A function to get the status information of receiptPrinter device.
   *
   * @param receiptPrinterStatusEventCallback - The callback function to receive the response
   */
  getStatus(receiptPrinterStatusEventCallback) {
    // Add temporary listener for status response
    const statusListener = response => {
      if (response.Command === 'ReceiptPrinterStatusResponse') {
        receiptPrinterStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class consists of functions related to the withdrawal transaction such as `dispenseByAmount`, `retractNote` etc.
 * Most methods are asynchronous so the caller should register a callback function to receive the corresponding response to those asynchronous functions by using
 * `addListener` before calling a method or pass the callback function as a parameter.
 * Also, when it finishes controlling the transaction, it should `removeListener` to stop receiving responses.
 */
class CashDispenser extends DeviceBase {
  constructor() {
    super('CashDispenser');
  }
  othersEventCallback(obj) {
    // Handle cash dispenser specific events
    switch (obj.Command) {
      case 'ItemsPresented':
        console.log('Cash presented to customer:', obj);
        return true;
      case 'DispenseNoteCompleted':
        console.log('Dispense operation completed:', obj);
        return true;
      case 'ItemsTaken':
        console.log('Cash taken by customer:', obj);
        return true;
      case 'RetractNoteCompleted':
        console.log('Retract operation completed:', obj);
        return true;
      case 'DenominateNoteCompleted':
        console.log('Denomination check completed:', obj);
        return true;
      case 'PresentNoteCompleted':
        console.log('Present note completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function that commands the withdraw to request amount.
   * As the result of the operation, an `ItemsPresented` and `DispenseNoteCompleted` response will be sent.
   * when dispensing cash is completed and the ATM is waiting for a customer to take the cash.
   * When the customer takes the bills, an `ItemsTaken` response is sent.
   * If the customer does not take the cash after a certain amount of time,
   * an `ItemsTaken` is sent with additional information in `Detail` field and cash will be retracted.
   *
   * @param amount - The amount to be dispensed.
   * @param takeNoteTimeout - Take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
   * @param present - Decide whether immediately present notes after dispense. (default: true)
   */
  dispenseByAmount({
    amount,
    takeNoteTimeout = 0,
    present = true
  }) {
    this.sendCommand('DispenseByAmount', {
      amount,
      takeNoteTimeout,
      present
    });
  }

  /**
   * A function that commands the withdraw to request count array.
   * As the result of the operation, an `ItemsPresented` and `DispenseNoteCompleted` response will be sent.
   * when dispensing cash is completed and the ATM is waiting for a customer to take the cash.
   * When the customer takes the bills, an `ItemsTaken` response is sent.
   * If the customer does not take the cash after a certain amount of time,
   * an `ItemsTaken` is sent with additional information in `Detail` field and cash will be retracted.
   *
   * @param count - The count list.
   * @param takeNoteTimeout - Take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
   * @param present - Decide whether immediately present notes after dispense. (default: true)
   */
  dispenseByCount({
    count,
    takeNoteTimeout = 0,
    present = true
  }) {
    this.sendCommand('DispenseByCount', {
      count,
      takeNoteTimeout,
      present
    });
  }

  /**
   * A function to retract notes dispenser device.
   * For example, if `retractNote` method is operating, the `RetractNoteCompleted` event will be sent.
   */
  retractNote() {
    this.sendCommand('RetractNote');
  }

  /**
   * A function to reset cash dispenser device.
   * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
   *
   * @param action - Define device reset action.
   */
  reset(action) {
    this.sendCommand('ResetDevice', {
      action
    });
  }

  /**
   * A function to get the status information of cash dispenser device.
   *
   * @param cashDispenserStatusEventCallback - The callback function to receive the response
   */
  getStatus(cashDispenserStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'CashDispenserStatusResponse') {
        cashDispenserStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }

  /**
   * This function checks whether the desired amount can be dispensed.
   * For example, if `isAmountDispensable` method is operating, the `DenominateNoteCompleted` event will be sent.
   *
   * @param amount - This is the amount to check whether dispensing is possible.
   */
  isAmountDispensable(amount) {
    this.sendCommand('IsAmountDispensable', {
      amount
    });
  }

  /**
   * This function checks whether the desired cassette count can be dispensed.
   * For example, if `isCountDispensable` method is operating, the `DenominateNoteCompleted` event will be sent.
   *
   * @param counts - This is to check whether each cassette has a dispensable count.
   */
  isCountDispensable(counts) {
    this.sendCommand('IsCountDispensable', {
      counts
    });
  }

  /**
   * A function to present dispensed note using dispenseByAmount or dispenseByCounts.
   * For example, if `presentNote` method is operating, the `PresentNoteCompleted` event will be sent.
   *
   * @param timeout - Timeout for take note. (default: 0 millisecond, which means infinity)
   */
  presentNote(timeout = 0) {
    this.sendCommand('PresentNote', {
      timeout
    });
  }
}

/**
 * @group API
 * @description This class controls the card reader device in an ATM.
 * It handles card insertion, reading magnetic stripe and chip data, and card ejection.
 * As the methods are asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an `addListener` before calling a method.
 * When it finishes controlling the device, it should `removeListener` to stop receiving responses.
 */
class CardReader extends DeviceBase {
  constructor() {
    super('CardReader');
  }
  othersEventCallback(obj) {
    // Handle card reader specific events
    switch (obj.Command) {
      case 'CardReadCompleted':
        console.log('Card read completed:', obj);
        return true;
      case 'EjectCardCompleted':
        console.log('Card eject completed:', obj);
        return true;
      case 'RetractCardCompleted':
        console.log('Card retract completed:', obj);
        return true;
      case 'ChipInitializeCompleted':
        console.log('Chip initialize completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to read card data from magnetic stripe or chip.
   * As the result of reading, `CardReadCompleted` will be sent.
   *
   * @param timeout - Read timeout in milliseconds (default: 30000)
   * @param tracks - Which tracks to read (default: all tracks)
   */
  readCard(timeout = 30000, tracks = 'AllTrack') {
    this.sendCommand('ReadCard', {
      timeout,
      tracks
    });
  }

  /**
   * A function to eject the card.
   * As the result of ejecting, `EjectCardCompleted` will be sent.
   */
  ejectCard() {
    this.sendCommand('EjectCard');
  }

  /**
   * A function to retract the card.
   * As the result of retracting, `RetractCardCompleted` will be sent.
   */
  retractCard() {
    this.sendCommand('RetractCard');
  }

  /**
   * A function to initialize chip card.
   * As the result of initialization, `ChipInitializeCompleted` will be sent.
   */
  initializeChip() {
    this.sendCommand('ChipInitialize');
  }

  /**
   * A function to reset card reader device.
   * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
   *
   * @param action - Define device reset action.
   */
  reset(action) {
    this.sendCommand('ResetDevice', {
      action
    });
  }

  /**
   * A function to get the status information of card reader device.
   *
   * @param cardReaderStatusEventCallback - The callback function to receive the response
   */
  getStatus(cardReaderStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'CardReaderStatusResponse') {
        cardReaderStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }

  /**
   * A function to power on chip card.
   * As the result of power on, `ChipPowerCompleted` will be sent.
   */
  chipPowerOn() {
    this.sendCommand('ChipPowerOn');
  }

  /**
   * A function to power off chip card.
   * As the result of power off, `ChipPowerCompleted` will be sent.
   */
  chipPowerOff() {
    this.sendCommand('ChipPowerOff');
  }

  /**
   * A function to send APDU command to chip card.
   * As the result of APDU, `ChipIOCompleted` will be sent.
   *
   * @param apduCommand - APDU command in hex string format
   */
  chipIO(apduCommand) {
    this.sendCommand('ChipIO', {
      apduCommand
    });
  }
}

/**
 * @group API
 * @description This class consists of functions related to the deposit transaction such as
 * `accept`, `verifyConfirmDeposit`, `commit`, etc.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using an
 * `addListener` before calling a method or pass the callback function as a parameter
 * depending on the method. Also, when it finishes controlling the transaction,
 * it should `removeListener` to stop receiving responses.
 */
class CashAcceptor extends DeviceBase {
  constructor() {
    super('CashAcceptor');
  }
  othersEventCallback(obj) {
    // Handle cash acceptor specific events
    switch (obj.Command) {
      case 'ItemsInserted':
        console.log('Cash inserted by customer:', obj);
        return true;
      case 'ItemsPresented':
        console.log('Cash presented to customer:', obj);
        return true;
      case 'ItemsTaken':
        console.log('Cash taken by customer:', obj);
        return true;
      case 'AcceptNoteCompleted':
        console.log('Accept cash operation completed:', obj);
        return true;
      case 'RefuseNoteCompleted':
        console.log('Refuse cash operation completed:', obj);
        return true;
      case 'ReturnNoteCompleted':
        console.log('Return cash operation completed:', obj);
        return true;
      case 'RetractNoteCompleted':
        console.log('Retract cash operation completed:', obj);
        return true;
      case 'CommitNoteCompleted':
        console.log('Commit operation completed:', obj);
        return true;
      case 'NoteError':
        console.log('Note error occurred:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * @deprecated Use the `accept` instead.
   * A function that starts a cash deposit transaction, waits for a customer to insert cash, and completes counting the cash.
   * The responses such as `ItemsInserted`, `ItemsPresented`, `ItemsTaken`, `NoteError`
   * and `AcceptNoteCompleted`, and `RefuseNoteCompleted` will be sent.
   */
  acceptCash(denominationList, currencyID, maxCount = 0, maxAmount = 0, insertNoteTimeout = 30000, takeNoteTimeout = 0) {
    this.accept({
      denominationList,
      currencyID,
      maxCount,
      maxAmount,
      insertNoteTimeout,
      takeNoteTimeout
    });
  }

  /**
   * A function that starts a cash deposit transaction, waits for a customer to insert cash, and completes counting the cash.
   * The responses such as `ItemsInserted`, `ItemsPresented`, `ItemsTaken`,
   * `AcceptNoteCompleted` and `RefuseNoteCompleted` will be sent.
   */
  accept({
    denominationList = Array.from({
      length: 100
    }, (_, i) => i + 1),
    currencyID,
    maxCount = 0,
    maxAmount = 0,
    insertNoteTimeout = 30000,
    takeNoteTimeout = 0
  }) {
    this.sendCommand('AcceptCash', {
      denominationList,
      currencyID,
      maxCount,
      maxAmount,
      insertNoteTimeout,
      takeNoteTimeout
    });
  }

  /**
   * @deprecated Use the `return` instead.
   * A function that returns the cash to a customer and waits for the customer to take the cash.
   * As the result of the operation, `ReturnNoteCompleted`, `ItemsTaken` and `ItemsPresented` will be sent.
   */
  returnCash(takeNoteTimeout = 0) {
    this.return(takeNoteTimeout);
  }

  /**
   * A function that returns the cash to a customer and waits for the customer to take the cash.
   * As the result of the operation, `ReturnNoteCompleted`, `ItemsTaken` and `ItemsPresented` will be sent.
   */
  return(takeNoteTimeout = 0) {
    this.sendCommand('ReturnCash', {
      takeNoteTimeout
    });
  }

  /**
   * @deprecated Use the `retract` instead.
   * A function that returns the cash to a customer and waits for the customer to take the cash.
   * As the result of the operation, `RetractNoteCompleted` are sent.
   */
  retractCash() {
    this.retract();
  }

  /**
   * A function that returns the cash to a customer and waits for the customer to take the cash.
   * As the result of the operation, `RetractNoteCompleted` are sent.
   */
  retract() {
    this.sendCommand('RetractCash');
  }

  /**
   * A function that asks you to deposit a cash or check to finish the transaction.
   * Depending on the transaction type, corresponding responses will be sent.
   * If it is a cash deposit, a `CommitNoteCompleted` will be sent.
   */
  commit() {
    this.sendCommand('CommitCash');
  }

  /**
   * A function that cancels the requests for accepting cash or checks.
   * A `AcceptNoteCompleted` response will be sent if the operation can be canceled.
   */
  cancel() {
    this.sendCommand('CancelAccept');
  }

  /**
   * A function to reset cash acceptor device.
   * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
   */
  reset(action) {
    this.sendCommand('ResetDevice', {
      action
    });
  }

  /**
   * A function to get the status information of cash acceptor device.
   */
  getStatus(cashAcceptorStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'CashAcceptorStatusResponse') {
        cashAcceptorStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the Pinpad device in an ATM to get a customer's PIN for a transaction.
 * To control the Pinpad, this class consists of event listeners and control commands
 * As the control methods are all asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an `addListener` before calling a method.
 * Also, when it finishes controlling the device, it should `removeListener` not to get the response.
 */
class PinPad extends DeviceBase {
  constructor() {
    super('PinPad');
  }
  othersEventCallback(obj) {
    // Handle PinPad specific events
    switch (obj.Command) {
      case 'KeyPressed':
        console.log('Key pressed on PinPad:', obj);
        return true;
      case 'PinEntryCompleted':
        console.log('PIN entry completed:', obj);
        return true;
      case 'CustomerInputReceived':
        console.log('Customer input received:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to enable the Pinpad to get the PIN from a customer.
   * After this method is called, a `KeyPressed` response is sent to the registered callback function
   * when a customer presses a key. When the PIN entry is completed, the response `PinEntryCompleted`
   * will be passed to the callback function. When the PIN entry is canceled because the customer
   * presses the CANCEL key, `PinEntryCompleted` will be sent with `CANCELLED` in the `Detail` field.
   * If the customer does not enter PIN after a certain amount of time,
   * the caller will get a `PinEntryCompleted` response with `TIMEOUT` in the `Detail` field.
   * If there is an error activating the Pinpad,
   * a `PinEntryCompleted` response will be sent from the ATM with `ERROR` in the `Detail` field.
   *
   * @param minDigits - The minimum number of key presses
   * @param maxDigits - The maximum number of key presses
   * @param autoEnd - Whether to proceed the transaction automatically when reached `maxDigits`
   * @param timeout - The time to wait for data entry to be finished (default: 30000 milliseconds)
   */
  inputPIN(minDigits, maxDigits, autoEnd, timeout = 30000) {
    this.sendCommand('InputPIN', {
      minDigits,
      maxDigits,
      autoEnd,
      timeout
    });
  }

  /**
   * A function to enable the Pinpad to get the input data from a customer such as phone number.
   * After this method is called, a `KeyPressed` response is sent to the registered callback function
   * when a customer presses a key. When the data entry is completed, the response `CustomerInputReceived`
   * will be passed to the callback function. When the data entry is canceled because the customer
   * presses the `CANCEL` key, `CustomerInputReceived` will be sent with `CANCELLED` in the `Detail` field.
   * If there is an error activating the Pinpad,
   * A `CustomerInputReceived` response will be sent from the ATM with `ERROR` in the `Detail` field.
   *
   * @param maxDigits - The maximum number of key presses
   * @param activeKeys - The keys that are enabled to be pressed
   * @param terminateKeys - The keys that end the data entry
   * @param timeout - The time to wait for data entry to be finished (default: 30000 milliseconds)
   */
  inputData(maxDigits, activeKeys, terminateKeys, timeout = 30000) {
    this.sendCommand('InputData', {
      maxDigits,
      activeKeys,
      terminateKeys,
      timeout
    });
  }

  /**
   * A function to cancel `inputPIN` or `inputData` command.
   * If the ATM is able to cancel the operation, the `KeyPressed` response will be sent with the `PressedKey` field `CANCELLED`.
   */
  cancel() {
    this.sendCommand('CancelInput');
  }

  /**
   * A function to reset Pin Pad device.
   * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
   */
  reset() {
    this.sendCommand('ResetDevice');
  }

  /**
   * A function to get the status information of pinpad device.
   */
  getStatus(pinPadStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'PinPadStatusResponse') {
        pinPadStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the camera in the ATM.
 * To control the camera, this class consists of event listeners and camera control commands such as capture.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using addListener before calling a method.
 * Also, when it finishes controlling the device, it should removeListener to stop receiving responses.
 */
class Camera extends DeviceBase {
  constructor() {
    super('Camera');
  }
  othersEventCallback(obj) {
    // Handle camera specific events
    switch (obj.Command) {
      case 'CaptureImageCompleted':
        console.log('Image capture completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to capture by camera.
   * When capture is completed, the response CaptureImageCompleted will be passed to the registered callback function.
   *
   * @param cameraType - ROOM, PERSON, EXITSLOT
   * @param fileName - file name only
   * @param textOnImage - text to be added to the image
   */
  capture({
    cameraType,
    fileName,
    textOnImage
  }) {
    this.sendCommand('CaptureImage', {
      cameraType,
      fileName,
      textOnImage
    });
  }

  /**
   * A function to get the status information of camera device.
   */
  getStatus(cameraStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'CameraStatusResponse') {
        cameraStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the card dispenser device in an ATM.
 * To control the device, this class consists of event listeners, control commands.
 * As the methods are asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an `addListener` before calling a method.
 * When it finishes controlling the device, it should `removeListener` to stop receiving responses.
 */
class CardDispenser extends DeviceBase {
  constructor() {
    super('CardDispenser');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'DispenseCardCompleted':
        console.log('Card dispense completed:', obj);
        return true;
      case 'EjectMediaCompleted':
        console.log('Card eject completed:', obj);
        return true;
      case 'RetractCardCompleted':
        console.log('Card retract completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to dispense a card.
   */
  dispense() {
    this.sendCommand('DispenseCard');
  }

  /**
   * A function to eject the card.
   */
  eject() {
    this.sendCommand('EjectCard');
  }

  /**
   * A function to retract the card.
   */
  retract() {
    this.sendCommand('RetractCard');
  }

  /**
   * A function to reset card dispenser device.
   */
  reset(action) {
    this.sendCommand('ResetDevice', {
      action
    });
  }

  /**
   * A function to get the status information of card dispenser device.
   */
  getStatus(cardDispenserStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'CardDispenserStatusResponse') {
        cardDispenserStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the barcode reader device in an ATM.
 */
class BarcodeReader extends DeviceBase {
  constructor() {
    super('BarcodeReader');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'ReadDataCompleted':
        console.log('Barcode read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to read barcode data.
   */
  readData(timeout = 30000) {
    this.sendCommand('ReadData', {
      timeout
    });
  }

  /**
   * A function to get the status information of barcode reader device.
   */
  getStatus(barcodeReaderStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'BarcodeReaderStatusResponse') {
        barcodeReaderStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the passport scanner device in an ATM.
 */
class PassportScanner extends DeviceBase {
  constructor() {
    super('PassportScanner');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'ReadImageCompleted':
        console.log('Passport scan completed:', obj);
        return true;
      case 'ReadDataCompleted':
        console.log('Passport data read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to scan a passport.
   */
  readImage(timeout = 30000) {
    this.sendCommand('ReadImage', {
      timeout
    });
  }

  /**
   * A function to read passport data.
   */
  readData(timeout = 30000) {
    this.sendCommand('ReadData', {
      timeout
    });
  }

  /**
   * A function to eject the passport.
   */
  ejectMedia() {
    this.sendCommand('EjectMedia');
  }

  /**
   * A function to get the status information of passport scanner device.
   */
  getStatus(passportScannerStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'PassportScannerStatusResponse') {
        passportScannerStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the ID scanner device in an ATM.
 */
class IDScanner extends DeviceBase {
  constructor() {
    super('IDScanner');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'ReadImageCompleted':
        console.log('ID scan completed:', obj);
        return true;
      case 'ReadDataCompleted':
        console.log('ID data read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to scan an ID document.
   */
  readImage(timeout = 30000) {
    this.sendCommand('ReadImage', {
      timeout
    });
  }

  /**
   * A function to read ID data.
   */
  readData(timeout = 30000) {
    this.sendCommand('ReadData', {
      timeout
    });
  }

  /**
   * A function to eject the ID document.
   */
  ejectMedia() {
    this.sendCommand('EjectMedia');
  }

  /**
   * A function to get the status information of ID scanner device.
   */
  getStatus(idScannerStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'IDScannerStatusResponse') {
        idScannerStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the document printer device in an ATM.
 */
class DocumentPrinter extends DeviceBase {
  constructor() {
    super('DocumentPrinter');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'PrintDataCompleted':
        console.log('Document print completed:', obj);
        return true;
      case 'PrintImageCompleted':
        console.log('Document image print completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to print on a document.
   */
  printData(data) {
    this.sendCommand('PrintData', {
      data
    });
  }

  /**
   * A function to print an image on a document.
   */
  printImage(imageData) {
    this.sendCommand('PrintImage', {
      imageData
    });
  }

  /**
   * A function to eject the document.
   */
  ejectMedia() {
    this.sendCommand('EjectMedia');
  }

  /**
   * A function to get the status information of document printer device.
   */
  getStatus(documentPrinterStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'DocumentPrinterStatusResponse') {
        documentPrinterStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the document scanner device in an ATM.
 */
class DocumentScanner extends DeviceBase {
  constructor() {
    super('DocumentScanner');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'ReadImageCompleted':
        console.log('Document scan completed:', obj);
        return true;
      case 'ReadDataCompleted':
        console.log('Document data read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to scan a document.
   */
  readImage(timeout = 30000) {
    this.sendCommand('ReadImage', {
      timeout
    });
  }

  /**
   * A function to read document data.
   */
  readData(timeout = 30000) {
    this.sendCommand('ReadData', {
      timeout
    });
  }

  /**
   * A function to eject the document.
   */
  ejectMedia() {
    this.sendCommand('EjectMedia');
  }

  /**
   * A function to retain the document.
   */
  retainMedia() {
    this.sendCommand('RetainMedia');
  }

  /**
   * A function to get the status information of document scanner device.
   */
  getStatus(documentScannerStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'DocumentScannerStatusResponse') {
        documentScannerStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the fingerprint scanner device in an ATM.
 */
class Fingerprint extends DeviceBase {
  constructor() {
    super('Fingerprint');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'FingerprintReadCompleted':
        console.log('Fingerprint scan completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to acquire fingerprint from customer.
   */
  acquireFinger(timeout = 30000) {
    this.sendCommand('AcquireFinger', {
      timeout
    });
  }

  /**
   * A function to stop fingerprint acquisition.
   */
  stopAcquireFinger() {
    this.sendCommand('StopAcquireFinger');
  }

  /**
   * A function to get the status information of fingerprint device.
   */
  getStatus(fingerprintStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'FingerprintStatusResponse') {
        fingerprintStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the RFID reader device in an ATM.
 */
class RFIDReader extends DeviceBase {
  constructor() {
    super('RFIDReader');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'ReadDataCompleted':
        console.log('RFID read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to read RFID data.
   */
  readData(timeout = 30000) {
    this.sendCommand('ReadData', {
      timeout
    });
  }

  /**
   * A function to get the status information of RFID reader device.
   */
  getStatus(rfidReaderStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'RFIDReaderStatusResponse') {
        rfidReaderStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the signature pad device in an ATM.
 */
class Signpad extends DeviceBase {
  constructor() {
    super('Signpad');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'CaptureCompleted':
        console.log('Signature capture completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to capture a signature.
   */
  capture(params) {
    this.sendCommand('Capture', params);
  }

  /**
   * A function to clear the signature pad.
   */
  clear() {
    this.sendCommand('Clear');
  }

  /**
   * A function to reset the signature pad.
   */
  reset() {
    this.sendCommand('Reset');
  }

  /**
   * A function to get the status information of signature pad device.
   */
  getStatus(signpadStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'SignpadStatusResponse') {
        signpadStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the palm vein scanner device in an ATM.
 */
class PalmveinScanner extends DeviceBase {
  constructor() {
    super('PalmveinScanner');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'ScanCompleted':
        console.log('Palm vein scan completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to scan palm vein.
   */
  scan(timeout = 30000) {
    this.sendCommand('Scan', {
      timeout
    });
  }

  /**
   * A function to reset the palm vein scanner.
   */
  reset() {
    this.sendCommand('Reset');
  }

  /**
   * A function to get the status information of palm vein scanner device.
   */
  getStatus(palmveinScannerStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'PalmveinScannerStatusResponse') {
        palmveinScannerStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the EKTP (Indonesian ID card) reader device in an ATM.
 */
class EKTPReader extends DeviceBase {
  constructor() {
    super('EKTPReader');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'ReadDataCompleted':
        console.log('EKTP read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to read EKTP data.
   */
  readData(timeout = 30000) {
    this.sendCommand('ReadData', {
      timeout
    });
  }

  /**
   * A function to reset the EKTP reader.
   */
  reset() {
    this.sendCommand('Reset');
  }

  /**
   * A function to get the status information of EKTP reader device.
   */
  getStatus(ektpReaderStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'EKTPReaderStatusResponse') {
        ektpReaderStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the checks acceptor device in an ATM.
 */
class ChecksAcceptor extends DeviceBase {
  constructor() {
    super('ChecksAcceptor');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'AcceptCompleted':
        console.log('Checks accept completed:', obj);
        return true;
      case 'ReturnCompleted':
        console.log('Checks return completed:', obj);
        return true;
      case 'RetractCompleted':
        console.log('Checks retract completed:', obj);
        return true;
      case 'CommitCompleted':
        console.log('Checks commit completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to accept checks.
   */
  accept(params = {}) {
    this.sendCommand('Accept', params);
  }

  /**
   * A function to return checks to customer.
   */
  return() {
    this.sendCommand('Return');
  }

  /**
   * A function to retract checks.
   */
  retract() {
    this.sendCommand('Retract');
  }

  /**
   * A function to commit the checks transaction.
   */
  commit() {
    this.sendCommand('Commit');
  }

  /**
   * A function to reset the checks acceptor.
   */
  reset() {
    this.sendCommand('Reset');
  }

  /**
   * A function to get the status information of checks acceptor device.
   */
  getStatus(checksAcceptorStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'ChecksAcceptorStatusResponse') {
        checksAcceptorStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the voice guidance device in an ATM.
 */
class VoiceGuidance extends DeviceBase {
  constructor() {
    super('VoiceGuidance');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'PlayCompleted':
        console.log('Voice play completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to play voice guidance.
   */
  play(params) {
    this.sendCommand('Play', params);
  }

  /**
   * A function to stop voice guidance.
   */
  stop() {
    this.sendCommand('Stop');
  }

  /**
   * A function to pause voice guidance.
   */
  pause() {
    this.sendCommand('Pause');
  }

  /**
   * A function to resume voice guidance.
   */
  resume() {
    this.sendCommand('Resume');
  }

  /**
   * A function to set the volume.
   */
  setVolume(volume) {
    this.sendCommand('SetVolume', {
      volume
    });
  }

  /**
   * A function to reset the voice guidance.
   */
  reset() {
    this.sendCommand('Reset');
  }

  /**
   * A function to get the status information of voice guidance device.
   */
  getStatus(voiceGuidanceStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'VoiceGuidanceStatusResponse') {
        voiceGuidanceStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class controls the terminal information and management.
 */
class Terminal extends DeviceBase {
  constructor() {
    super('Terminal');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'InitializeCompleted':
        console.log('Terminal initialize completed:', obj);
        return true;
      case 'ShutdownCompleted':
        console.log('Terminal shutdown completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to initialize the terminal.
   */
  initialize(params = {}) {
    this.sendCommand('Initialize', params);
  }

  /**
   * A function to shutdown the terminal.
   */
  shutdown() {
    this.sendCommand('Shutdown');
  }

  /**
   * A function to restart the terminal.
   */
  restart() {
    this.sendCommand('Restart');
  }

  /**
   * A function to get terminal information.
   */
  getInfo() {
    this.sendCommand('GetInfo');
  }

  /**
   * A function to set terminal information.
   */
  setInfo(params) {
    this.sendCommand('SetInfo', params);
  }

  /**
   * A function to get the status information of terminal.
   */
  getStatus(terminalStatusEventCallback) {
    const statusListener = response => {
      if (response.Command === 'TerminalStatusResponse') {
        terminalStatusEventCallback(response);
      }
    };
    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}

/**
 * @group API
 * @description This class handles transaction processing and management.
 */
class Transaction extends DeviceBase {
  constructor() {
    super('Transaction');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'TransactionCompleted':
        console.log('Transaction completed:', obj);
        return true;
      case 'TransactionCancelled':
        console.log('Transaction cancelled:', obj);
        return true;
      case 'TransactionFailed':
        console.log('Transaction failed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to start a transaction.
   */
  start(params) {
    this.sendCommand('Start', params);
  }

  /**
   * A function to commit a transaction.
   */
  commit(transactionId) {
    this.sendCommand('Commit', {
      transactionId
    });
  }

  /**
   * A function to rollback a transaction.
   */
  rollback(transactionId) {
    this.sendCommand('Rollback', {
      transactionId
    });
  }

  /**
   * A function to cancel a transaction.
   */
  cancel(transactionId) {
    this.sendCommand('Cancel', {
      transactionId
    });
  }

  /**
   * A function to get transaction status.
   */
  getTransactionStatus(transactionId) {
    this.sendCommand('GetTransactionStatus', {
      transactionId
    });
  }

  /**
   * A function to get transaction history.
   */
  getHistory(params = {}) {
    this.sendCommand('GetHistory', params);
  }
}

/**
 * @group API
 * @description This class handles NDC (Network Data Communication) protocol for ATM communication.
 */
class NDC extends DeviceBase {
  constructor() {
    super('NDC');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'NDCCommandReceived':
        console.log('NDC command received:', obj);
        return true;
      case 'NDCStateChanged':
        console.log('NDC state changed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to send NDC command.
   */
  sendNDCCommand(command) {
    this.sendCommand('SendNDCCommand', command);
  }

  /**
   * A function to set NDC state.
   */
  setState(state) {
    this.sendCommand('SetState', state);
  }

  /**
   * A function to get current NDC state.
   */
  getState() {
    this.sendCommand('GetState');
  }

  /**
   * A function to process NDC message.
   */
  processMessage(message) {
    this.sendCommand('ProcessMessage', {
      message
    });
  }

  /**
   * A function to initialize NDC communication.
   */
  initialize() {
    this.sendCommand('Initialize');
  }

  /**
   * A function to terminate NDC communication.
   */
  terminate() {
    this.sendCommand('Terminate');
  }
}

/**
 * @group API
 * @description This class handles device events and event management across all ATM devices.
 */
class DeviceEvent extends DeviceBase {
  constructor() {
    super('DeviceEvent');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'DeviceEventOccurred':
        console.log('Device event occurred:', obj);
        return true;
      case 'EventFilterUpdated':
        console.log('Event filter updated:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to subscribe to device events.
   */
  subscribe(filter = {}) {
    this.sendCommand('Subscribe', filter);
  }

  /**
   * A function to unsubscribe from device events.
   */
  unsubscribe() {
    this.sendCommand('Unsubscribe');
  }

  /**
   * A function to get event history.
   */
  getEventHistory(filter = {}) {
    this.sendCommand('GetEventHistory', filter);
  }

  /**
   * A function to clear event history.
   */
  clearEventHistory() {
    this.sendCommand('ClearEventHistory');
  }

  /**
   * A function to set event filter.
   */
  setEventFilter(filter) {
    this.sendCommand('SetEventFilter', filter);
  }

  /**
   * A function to get current event filter.
   */
  getEventFilter() {
    this.sendCommand('GetEventFilter');
  }

  /**
   * A function to trigger a custom device event.
   */
  triggerEvent(eventData) {
    this.sendCommand('TriggerEvent', eventData);
  }
}

/**
 * @group API
 * @description This class provides common utility functions and shared functionality across all ATM devices.
 */
class Common extends DeviceBase {
  constructor() {
    super('Common');
  }
  othersEventCallback(obj) {
    switch (obj.Command) {
      case 'ConfigurationUpdated':
        console.log('Configuration updated:', obj);
        return true;
      case 'LogEntryAdded':
        console.log('Log entry added:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to get configuration value.
   */
  getConfiguration(key, scope = 'global') {
    this.sendCommand('GetConfiguration', {
      key,
      scope
    });
  }

  /**
   * A function to set configuration value.
   */
  setConfiguration(params) {
    this.sendCommand('SetConfiguration', params);
  }

  /**
   * A function to get all configurations.
   */
  getAllConfigurations(scope = 'global') {
    this.sendCommand('GetAllConfigurations', {
      scope
    });
  }

  /**
   * A function to log a message.
   */
  log(params) {
    this.sendCommand('Log', params);
  }

  /**
   * A function to get system information.
   */
  getSystemInfo() {
    this.sendCommand('GetSystemInfo');
  }

  /**
   * A function to get device list.
   */
  getDeviceList() {
    this.sendCommand('GetDeviceList');
  }

  /**
   * A function to get application version.
   */
  getVersion() {
    this.sendCommand('GetVersion');
  }

  /**
   * A function to perform health check.
   */
  healthCheck() {
    this.sendCommand('HealthCheck');
  }

  /**
   * A function to get timestamp.
   */
  getTimestamp() {
    this.sendCommand('GetTimestamp');
  }

  /**
   * A function to generate UUID.
   */
  generateUUID() {
    this.sendCommand('GenerateUUID');
  }
}

// Core enums based on the original @warp/api2 analysis

let DeviceStatus = /*#__PURE__*/function (DeviceStatus) {
  DeviceStatus["ONLINE"] = "ONLINE";
  DeviceStatus["POWEREDOFF"] = "POWEREDOFF";
  DeviceStatus["NODEVICE"] = "NODEVICE";
  DeviceStatus["HWERROR"] = "HWERROR";
  DeviceStatus["NOCARD"] = "NOCARD";
  DeviceStatus["NOTSUPP"] = "NOTSUPP";
  DeviceStatus["UNKNOWN"] = "UNKNOWN";
  return DeviceStatus;
}({});
let ResponseDetailInfo = /*#__PURE__*/function (ResponseDetailInfo) {
  ResponseDetailInfo["OK"] = "OK";
  ResponseDetailInfo["ERROR"] = "ERROR";
  ResponseDetailInfo["FULL"] = "FULL";
  ResponseDetailInfo["RETRACTCASH"] = "OK|RETRACTED_CASH";
  ResponseDetailInfo["TIMEOUT"] = "TIMEOUT";
  ResponseDetailInfo["PRESENT"] = "PRESENT";
  ResponseDetailInfo["NOTPRESENT"] = "NOTPRESENT";
  ResponseDetailInfo["CANCELLED"] = "CANCELLED";
  ResponseDetailInfo["INCORRECTPIN"] = "INCORRECTPIN";
  ResponseDetailInfo["MISMATCHPIN"] = "MISMATCHPIN";
  ResponseDetailInfo["RETRACT"] = "RETRACT";
  ResponseDetailInfo["REFUSED"] = "REFUSED";
  ResponseDetailInfo["WRONGPIN"] = "WRONGPIN3TIMES";
  ResponseDetailInfo["INSUFFICIENTBALANCE"] = "INSUFFICIENTBALANCE";
  return ResponseDetailInfo;
}({});
let ResetActionType = /*#__PURE__*/function (ResetActionType) {
  ResetActionType["RETAIN"] = "RETAIN";
  ResetActionType["EJECT"] = "EJECT";
  return ResetActionType;
}({});
let ServiceState = /*#__PURE__*/function (ServiceState) {
  ServiceState["OFFLINE"] = "OFFLINE";
  ServiceState["INSERVICE"] = "IN_SERVICE";
  ServiceState["INSUPERVISOR"] = "IN_SUPERVISOR";
  ServiceState["OUTOFSERVICE"] = "OUT_OF_SERVICE";
  ServiceState["PENDING"] = "PENDING";
  return ServiceState;
}({});
let WebSocketEvents = /*#__PURE__*/function (WebSocketEvents) {
  WebSocketEvents["WebSocketConnectionEvent"] = "SubscribeEvents|webSocketConnectionEvent";
  WebSocketEvents["OnConnectToWARPCore"] = "OnConnectToWARPCore";
  WebSocketEvents["OnDisconnectToWARPCore"] = "OnDisconnectToWARPCore";
  return WebSocketEvents;
}({});
let CoreAPIResponseCommand = /*#__PURE__*/function (CoreAPIResponseCommand) {
  CoreAPIResponseCommand["TaskResponse"] = "TaskResponse";
  CoreAPIResponseCommand["ModeResponse"] = "ModeResponse";
  CoreAPIResponseCommand["CardReadCompleted"] = "CardReadCompleted";
  CoreAPIResponseCommand["PinEntryCompleted"] = "PinEntryCompleted";
  CoreAPIResponseCommand["ItemsPresented"] = "ItemsPresented";
  CoreAPIResponseCommand["DispenseNoteCompleted"] = "DispenseNoteCompleted";
  CoreAPIResponseCommand["ItemsTaken"] = "ItemsTaken";
  CoreAPIResponseCommand["TaskCompleted"] = "TaskCompleted";
  CoreAPIResponseCommand["TaskCanceled"] = "TaskCanceled";
  CoreAPIResponseCommand["TaskTimeout"] = "TaskTimeout";
  CoreAPIResponseCommand["TaskError"] = "TaskError";
  CoreAPIResponseCommand["PrintCompleted"] = "PrintCompleted";
  CoreAPIResponseCommand["EjectMediaCompleted"] = "EjectMediaCompleted";
  CoreAPIResponseCommand["ResetDeviceCompleted"] = "ResetDeviceCompleted";
  CoreAPIResponseCommand["AuthorizationResponse"] = "AuthorizationResponse";
  CoreAPIResponseCommand["TransactionReady"] = "TransactionReady";
  return CoreAPIResponseCommand;
}({});
let DeviceName = /*#__PURE__*/function (DeviceName) {
  DeviceName["CardReader"] = "CardReader";
  DeviceName["CashDispenser"] = "CashDispenser";
  DeviceName["CashAcceptor"] = "CashAcceptor";
  DeviceName["ReceiptPrinter"] = "ReceiptPrinter";
  DeviceName["PinPad"] = "PinPad";
  DeviceName["Camera"] = "Camera";
  DeviceName["Fingerprint"] = "Fingerprint";
  DeviceName["BarcodeReader"] = "BarcodeReader";
  return DeviceName;
}({});
let StringBoolean = /*#__PURE__*/function (StringBoolean) {
  StringBoolean["True"] = "True";
  StringBoolean["False"] = "False";
  return StringBoolean;
}({});
let MediaStatus = /*#__PURE__*/function (MediaStatus) {
  MediaStatus["PRESENT"] = "PRESENT";
  MediaStatus["NOTPRESENT"] = "NOTPRESENT";
  MediaStatus["JAMMED"] = "JAMMED";
  MediaStatus["ENTERING"] = "ENTERING";
  MediaStatus["UNKNOWN"] = "UNKNOWN";
  MediaStatus["EXITING"] = "EXITING";
  return MediaStatus;
}({});

class AbstractResponse {
  constructor(command, detail = ResponseDetailInfo.OK) {
    this.Command = command;
    this.Detail = detail;
    this.RequestId = '';
    this.Timestamp = new Date();
  }
}
class TaskResponse extends AbstractResponse {
  constructor(command, detail = ResponseDetailInfo.OK) {
    super(command, detail);
  }
}
class AbstractDeviceStatusResponse extends TaskResponse {
  constructor(command) {
    super(command);
    this.DeviceStatus = DeviceStatus.UNKNOWN;
    this.IsAvailable = null;
    this.ExtraStatuses = [];
  }
}
class ExtraStatus {
  constructor(key, value) {
    this.Key = key;
    this.Value = value;
  }
}
class ReceiptPrinterStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('ReceiptPrinterStatusResponse');
  }
}
class CashDispenserStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('CashDispenserStatusResponse');
    this.CassetteStatus = '';
    this.StackerStatus = '';
  }
}
class CashAcceptorStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('CashAcceptorStatusResponse');
    this.AcceptorStatus = '';
    this.StackerStatus = '';
  }
}
class PinPadStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('PinPadStatusResponse');
    this.EncryptionStatus = '';
  }
}
class CameraStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('CameraStatusResponse');
    this.CameraStatus = '';
  }
}
class CardDispenserStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('CardDispenserStatusResponse');
    this.MediaStatus = '';
  }
}
class BarcodeReaderStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('BarcodeReaderStatusResponse');
    this.ScannerStatus = '';
  }
}
class FingerprintStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('FingerprintStatusResponse');
    this.ScannerStatus = '';
  }
}
class DocumentScannerStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('DocumentScannerStatusResponse');
    this.ScannerStatus = '';
  }
}
class DocumentPrinterStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('DocumentPrinterStatusResponse');
    this.PrinterStatus = '';
  }
}
class IDScannerStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('IDScannerStatusResponse');
    this.ScannerStatus = '';
  }
}
class PassportScannerStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('PassportScannerStatusResponse');
    this.ScannerStatus = '';
  }
}
class RFIDReaderStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('RFIDReaderStatusResponse');
    this.ReaderStatus = '';
  }
}
class SignpadStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('SignpadStatusResponse');
    this.PadStatus = '';
  }
}
class PalmveinScannerStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('PalmveinScannerStatusResponse');
    this.ScannerStatus = '';
  }
}
class EKTPReaderStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('EKTPReaderStatusResponse');
    this.ReaderStatus = '';
  }
}
class ChecksAcceptorStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('ChecksAcceptorStatusResponse');
    this.AcceptorStatus = '';
  }
}
class VoiceGuidanceStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('VoiceGuidanceStatusResponse');
    this.SpeakerStatus = '';
  }
}
class TerminalStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('TerminalStatusResponse');
    this.TerminalStatus = '';
    this.ConnectionStatus = '';
  }
}
class CardReaderStatusResponse extends AbstractDeviceStatusResponse {
  constructor() {
    super('CardReaderStatusResponse');
    this.MediaStatus = '';
    this.ChipStatus = '';
  }
}
class AuthorizationResponse extends TaskResponse {
  constructor() {
    super('AuthorizationResponse');
    this.Machine = '';
    this.Code = '';
  }
}

class EncryptionInfo {
  isEncryptionMode = false;
  token = null;
  publicKey = null;
  aesKeySeed = null;
  aesIVSeed = null;
  constructor() {}
  static getInstance() {
    if (!EncryptionInfo.instance) {
      EncryptionInfo.instance = new EncryptionInfo();
    }
    return EncryptionInfo.instance;
  }
}
class EncryptionHelper {
  constructor() {
    this.encryptionInfo = EncryptionInfo.getInstance();
  }

  // RSA Encryption
  encryptRSA(data, publicKey) {
    const encrypt = new jsencrypt.JSEncrypt();
    encrypt.setPublicKey(publicKey || this.encryptionInfo.publicKey || '');
    return encrypt.encrypt(data) || '';
  }

  // AES Encryption
  encryptAES(data, key, iv) {
    const keyToUse = key || this.encryptionInfo.aesKeySeed || '';
    const ivToUse = iv || this.encryptionInfo.aesIVSeed || '';
    const encrypted = CryptoJS.AES.encrypt(data, keyToUse, {
      iv: CryptoJS.enc.Utf8.parse(ivToUse),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  // AES Decryption
  decryptAES(encryptedData, key, iv) {
    const keyToUse = key || this.encryptionInfo.aesKeySeed || '';
    const ivToUse = iv || this.encryptionInfo.aesIVSeed || '';
    const decrypted = CryptoJS.AES.decrypt(encryptedData, keyToUse, {
      iv: CryptoJS.enc.Utf8.parse(ivToUse),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  // MD5 Hash
  md5Hash(data) {
    return CryptoJS.MD5(data).toString();
  }

  // SHA256 Hash
  sha256Hash(data) {
    return CryptoJS.SHA256(data).toString();
  }

  // Generate random key
  generateRandomKey(length = 32) {
    return CryptoJS.lib.WordArray.random(length).toString();
  }
}

class WebSocketClient {
  ws = null;
  reconnectAttempts = 0;
  maxReconnectAttempts = 5;
  reconnectInterval = 3000;
  isConnected = false;
  constructor(config, eventHandler) {
    this.config = config;
    this.eventHandler = eventHandler;
  }
  connect() {
    return new Promise((resolve, reject) => {
      const url = this.buildWebSocketUrl();
      try {
        this.ws = new WebSocket(url);
        this.ws.onopen = event => {
          this.isConnected = true;
          this.reconnectAttempts = 0;
          console.log('WebSocket connected successfully');
          this.eventHandler.sendEvent(WebSocketEvents.OnConnectToWARPCore, event);
          resolve();
        };
        this.ws.onmessage = event => {
          this.handleMessage(event.data);
        };
        this.ws.onclose = event => {
          this.isConnected = false;
          console.log('WebSocket connection closed');
          this.eventHandler.sendEvent(WebSocketEvents.OnDisconnectToWARPCore, event);
          this.attemptReconnect();
        };
        this.ws.onerror = error => {
          console.error('WebSocket error:', error);
          reject(error);
        };
      } catch (error) {
        reject(error);
      }
    });
  }
  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
      this.isConnected = false;
    }
  }
  send(message) {
    if (this.ws && this.isConnected) {
      const formattedMessage = this.formatMessage(message);
      this.ws.send(JSON.stringify(formattedMessage));
    } else {
      console.error('WebSocket not connected');
    }
  }
  getConnectionStatus() {
    return this.isConnected;
  }
  buildWebSocketUrl() {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = this.config.webSocketUrl || '127.0.0.1';
    const port = this.config.webSocketPort || '9091';
    return `${protocol}//${host}:${port}`;
  }
  handleMessage(data) {
    try {
      const message = JSON.parse(data);

      // Decrypt if needed
      if (this.config.isEncryptionMode && message.IsEncrypt) {
        // Handle decryption here
        console.log('Decrypting message...');
      }

      // Route message to appropriate handler
      this.routeMessage(message);
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  }
  routeMessage(message) {
    if (message.Command) {
      this.eventHandler.sendEvent(message.Command, message);
    }

    // General message event
    this.eventHandler.sendEvent('message', message);
  }
  formatMessage(payload) {
    const header = payload.Command || 'Unknown';
    const isEncrypt = this.config.isEncryptionMode || false;
    const token = ''; // Get from encryption service

    return new MessageFormat(header, payload, isEncrypt, token);
  }
  attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
      setTimeout(() => {
        this.connect().catch(error => {
          console.error('Reconnection failed:', error);
        });
      }, this.reconnectInterval);
    } else {
      console.error('Max reconnection attempts reached');
    }
  }
}

/**
 * Main initialization class for the ATM Device API
 * This class handles WebSocket connection setup and device configuration
 */
class ATMDeviceAPI {
  static webSocketClient = null;
  static eventHandler = null;
  static encryptionInfo = null;

  /**
   * Initialize the ATM Device API with configuration
   * @param config - Configuration object with WebSocket and encryption settings
   * @param config.isEncryptionMode - Enable encryption mode (default: true)
   * @param config.webSocketUrl - WebSocket server URL (default: '127.0.0.1')
   * @param config.webSocketPort - WebSocket server port (default: '9091' or '443')
   */
  static async init(config = {}) {
    // Set default configuration
    const defaultConfig = {
      isEncryptionMode: true,
      webSocketUrl: '127.0.0.1',
      webSocketPort: '9091',
      ...config
    };

    // Initialize encryption
    ATMDeviceAPI.encryptionInfo = EncryptionInfo.getInstance();
    ATMDeviceAPI.encryptionInfo.isEncryptionMode = defaultConfig.isEncryptionMode || false;

    // Initialize event handler
    ATMDeviceAPI.eventHandler = new EventBusHandler();

    // Initialize WebSocket client
    ATMDeviceAPI.webSocketClient = new WebSocketClient(defaultConfig, ATMDeviceAPI.eventHandler);
    try {
      // Connect to WebSocket server
      await ATMDeviceAPI.webSocketClient.connect();
      console.log('ATM Device API initialized successfully');
    } catch (error) {
      console.error('Failed to initialize ATM Device API:', error);
      throw error;
    }
  }

  /**
   * Get the WebSocket client instance
   */
  static getWebSocketClient() {
    return ATMDeviceAPI.webSocketClient;
  }

  /**
   * Get the event handler instance
   */
  static getEventHandler() {
    return ATMDeviceAPI.eventHandler;
  }

  /**
   * Get the encryption info instance
   */
  static getEncryptionInfo() {
    return ATMDeviceAPI.encryptionInfo;
  }

  /**
   * Disconnect and cleanup resources
   */
  static disconnect() {
    if (ATMDeviceAPI.webSocketClient) {
      ATMDeviceAPI.webSocketClient.disconnect();
      ATMDeviceAPI.webSocketClient = null;
    }
    if (ATMDeviceAPI.eventHandler) {
      ATMDeviceAPI.eventHandler.removeAllEventListener();
      ATMDeviceAPI.eventHandler = null;
    }
    ATMDeviceAPI.encryptionInfo = null;
    console.log('ATM Device API disconnected');
  }

  /**
   * Check if the API is connected
   */
  static isConnected() {
    var _ATMDeviceAPI$webSock;
    return ((_ATMDeviceAPI$webSock = ATMDeviceAPI.webSocketClient) === null || _ATMDeviceAPI$webSock === void 0 ? void 0 : _ATMDeviceAPI$webSock.getConnectionStatus()) || false;
  }
}

exports.ATMDeviceAPI = ATMDeviceAPI;
exports.AbstractDeviceStatusResponse = AbstractDeviceStatusResponse;
exports.AbstractResponse = AbstractResponse;
exports.AuthorizationResponse = AuthorizationResponse;
exports.BarcodeReader = BarcodeReader;
exports.BarcodeReaderStatusResponse = BarcodeReaderStatusResponse;
exports.Caller = Caller;
exports.Camera = Camera;
exports.CameraStatusResponse = CameraStatusResponse;
exports.CardDispenser = CardDispenser;
exports.CardDispenserStatusResponse = CardDispenserStatusResponse;
exports.CardReader = CardReader;
exports.CardReaderStatusResponse = CardReaderStatusResponse;
exports.CashAcceptor = CashAcceptor;
exports.CashAcceptorStatusResponse = CashAcceptorStatusResponse;
exports.CashDispenser = CashDispenser;
exports.CashDispenserStatusResponse = CashDispenserStatusResponse;
exports.ChecksAcceptor = ChecksAcceptor;
exports.ChecksAcceptorStatusResponse = ChecksAcceptorStatusResponse;
exports.Common = Common;
exports.CoreAPIResponseCommand = CoreAPIResponseCommand;
exports.DeviceBase = DeviceBase;
exports.DeviceEvent = DeviceEvent;
exports.DeviceName = DeviceName;
exports.DeviceStatus = DeviceStatus;
exports.DocumentPrinter = DocumentPrinter;
exports.DocumentPrinterStatusResponse = DocumentPrinterStatusResponse;
exports.DocumentScanner = DocumentScanner;
exports.DocumentScannerStatusResponse = DocumentScannerStatusResponse;
exports.EKTPReader = EKTPReader;
exports.EKTPReaderStatusResponse = EKTPReaderStatusResponse;
exports.EncryptionHelper = EncryptionHelper;
exports.EncryptionInfo = EncryptionInfo;
exports.EventBus = EventBus;
exports.EventBusHandler = EventBusHandler;
exports.ExtraStatus = ExtraStatus;
exports.Fingerprint = Fingerprint;
exports.FingerprintStatusResponse = FingerprintStatusResponse;
exports.IDScanner = IDScanner;
exports.IDScannerStatusResponse = IDScannerStatusResponse;
exports.MediaStatus = MediaStatus;
exports.MessageFormat = MessageFormat;
exports.NDC = NDC;
exports.PalmveinScanner = PalmveinScanner;
exports.PalmveinScannerStatusResponse = PalmveinScannerStatusResponse;
exports.PassportScanner = PassportScanner;
exports.PassportScannerStatusResponse = PassportScannerStatusResponse;
exports.PinPad = PinPad;
exports.PinPadStatusResponse = PinPadStatusResponse;
exports.RFIDReader = RFIDReader;
exports.RFIDReaderStatusResponse = RFIDReaderStatusResponse;
exports.ReceiptPrinter = ReceiptPrinter;
exports.ReceiptPrinterStatusResponse = ReceiptPrinterStatusResponse;
exports.ResetActionType = ResetActionType;
exports.ResponseDetailInfo = ResponseDetailInfo;
exports.ServiceState = ServiceState;
exports.Signpad = Signpad;
exports.SignpadStatusResponse = SignpadStatusResponse;
exports.StringBoolean = StringBoolean;
exports.TaskResponse = TaskResponse;
exports.Terminal = Terminal;
exports.TerminalStatusResponse = TerminalStatusResponse;
exports.Transaction = Transaction;
exports.VoiceGuidance = VoiceGuidance;
exports.VoiceGuidanceStatusResponse = VoiceGuidanceStatusResponse;
exports.WARPJsonFormat = WARPJsonFormat;
exports.WebSocketClient = WebSocketClient;
exports.WebSocketEvents = WebSocketEvents;
exports.default = ATMDeviceAPI;
exports.generateUUID = generateUUID;
//# sourceMappingURL=index.cjs.js.map
