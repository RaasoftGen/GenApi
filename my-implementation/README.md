# ATM Device API

A comprehensive TypeScript library for controlling ATM (Automated Teller Machine) hardware devices. This library provides a modern, type-safe interface for interacting with various ATM components through WebSocket communication.

## 🚀 Features

- **🔧 Device Control**: Control 20+ ATM devices including:
  - Receipt Printer
  - Cash Dispenser  
  - Cash Acceptor
  - Card Reader
  - PIN Pad
  - Camera
  - Fingerprint Scanner
  - And more...

- **🔒 Security**: Built-in encryption support with RSA/AES
- **📡 Real-time Communication**: WebSocket-based communication
- **🎯 Event-Driven**: Asynchronous operations with event listeners
- **📝 TypeScript**: Fully typed for excellent developer experience
- **🏗️ Modern Architecture**: Clean, modular design

## 📦 Installation

```bash
npm install atm-device-api
```

## 🔧 Quick Start

### Initialize the API

```typescript
import ATMDeviceAPI from 'atm-device-api';

// Initialize with default settings
await ATMDeviceAPI.init();

// Or with custom configuration
await ATMDeviceAPI.init({
  webSocketUrl: '192.168.1.100',
  webSocketPort: '9091',
  isEncryptionMode: true
});
```

### Using Receipt Printer

```typescript
import { ReceiptPrinter } from 'atm-device-api';

const printer = new ReceiptPrinter();

// Add event listener
printer.addListener((response) => {
  console.log('Printer response:', response);
});

// Print a receipt
printer.print({
  printData: [
    'Welcome to ABC Bank',
    'Transaction Receipt',
    '==================',
    'Amount: $100.00',
    'Balance: $1,500.00',
    'Thank you!'
  ]
});

// Clean up
printer.removeListener();
```

### Using Cash Dispenser

```typescript
import { CashDispenser } from 'atm-device-api';

const dispenser = new CashDispenser();

dispenser.addListener((response) => {
  switch (response.Command) {
    case 'DispenseNoteCompleted':
      console.log('Cash dispensed successfully');
      break;
    case 'ItemsTaken':
      console.log('Customer took the cash');
      break;
  }
});

// Dispense $100
dispenser.dispenseByAmount({
  amount: 10000, // Amount in cents
  takeNoteTimeout: 30000 // 30 seconds timeout
});
```

### Using Card Reader

```typescript
import { CardReader } from 'atm-device-api';

const cardReader = new CardReader();

cardReader.addListener((response) => {
  if (response.Command === 'CardReadCompleted') {
    console.log('Card data:', response.cardData);
  }
});

// Read card
cardReader.readCard(30000); // 30 second timeout
```

## 📋 API Reference

### Core Classes

#### ATMDeviceAPI
Main initialization class for the library.

```typescript
class ATMDeviceAPI {
  static async init(config?: ConfigType): Promise<void>
  static disconnect(): void
  static isConnected(): boolean
  static getWebSocketClient(): WebSocketClient | null
  static getEventHandler(): EventBusHandler | null
}
```

#### DeviceBase
Abstract base class for all device controllers.

```typescript
abstract class DeviceBase {
  addListener(callback: (data: any) => void): void
  removeListener(): void
  protected sendCommand(command: string, parameters?: any): void
  protected abstract othersEventCallback(obj: any): boolean
}
```

### Device Classes

All device classes extend `DeviceBase` and follow the same pattern:

1. **Add listener** to receive responses
2. **Call device methods** to perform operations  
3. **Remove listener** when done

#### ReceiptPrinter

```typescript
class ReceiptPrinter extends DeviceBase {
  print(params: PrintParams): void
  printWithEject(params: PrintParams): void
  eject(): void
  reset(action: ResetActionType): void
  getStatus(callback: (response: ReceiptPrinterStatusResponse) => void): void
}
```

#### CashDispenser

```typescript
class CashDispenser extends DeviceBase {
  dispenseByAmount(params: { amount: number; takeNoteTimeout?: number; present?: boolean }): void
  dispenseByCount(params: { count: number[]; takeNoteTimeout?: number; present?: boolean }): void
  retractNote(): void
  presentNote(timeout?: number): void
  isAmountDispensable(amount: number): void
  isCountDispensable(counts: number[]): void
  reset(action: ResetActionType): void
  getStatus(callback: (response: CashDispenserStatusResponse) => void): void
}
```

#### CardReader

```typescript
class CardReader extends DeviceBase {
  readCard(timeout?: number, tracks?: string): void
  ejectCard(): void
  retractCard(): void
  initializeChip(): void
  chipPowerOn(): void
  chipPowerOff(): void
  chipIO(apduCommand: string): void
  reset(action: ResetActionType): void
  getStatus(callback: (response: CardReaderStatusResponse) => void): void
}
```

## 🏗️ Configuration

```typescript
interface ConfigType {
  isEncryptionMode?: boolean;  // Enable encryption (default: true)
  webSocketUrl?: string;       // WebSocket server URL (default: '127.0.0.1')
  webSocketPort?: string;      // WebSocket server port (default: '9091')
}
```

## 🔐 Security Features

The library includes built-in encryption support:

- **RSA Encryption** for key exchange
- **AES Encryption** for data transmission
- **Message Authentication** with tokens
- **Secure WebSocket** connections

## 🎯 Event System

All operations are asynchronous and use an event-driven pattern:

```typescript
// Standard event flow
device.addListener((response) => {
  switch (response.Command) {
    case 'OperationCompleted':
      // Handle success
      break;
    case 'TaskError':
      // Handle error
      break;
  }
});

device.performOperation();
```

## 🧪 Testing

```bash
npm test
```

## 🏗️ Building

```bash
npm run build
```

This creates:
- `dist/index.cjs.js` - CommonJS build
- `dist/index.esm.js` - ES Module build  
- `dist/index.umd.min.js` - UMD build (minified)
- `dist/index.d.ts` - TypeScript declarations

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue on GitHub.

---

**Note**: This library is designed to work with ATM hardware that supports the WARP protocol or compatible WebSocket-based communication systems.
