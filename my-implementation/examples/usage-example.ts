// Example usage of the ATM Device API

import ATMDeviceAPI, {
  ReceiptPrinter,
  CashDispenser,
  CardReader,
  ResetActionType,
  ResponseDetailInfo
} from 'atm-device-api';

async function main() {
  try {
    // Initialize the API
    console.log('Initializing ATM Device API...');
    await ATMDeviceAPI.init({
      webSocketUrl: '127.0.0.1',
      webSocketPort: '9091',
      isEncryptionMode: false // Set to true in production
    });

    console.log('API initialized successfully!');

    // Example 1: Receipt Printer
    await exampleReceiptPrinter();

    // Example 2: Cash Dispenser
    await exampleCashDispenser();

    // Example 3: Card Reader
    await exampleCardReader();

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Cleanup
    ATMDeviceAPI.disconnect();
  }
}

async function exampleReceiptPrinter(): Promise<void> {
  console.log('\n=== Receipt Printer Example ===');
  
  const printer = new ReceiptPrinter();
  
  return new Promise((resolve) => {
    printer.addListener((response) => {
      console.log('Printer Response:', response.Command, response.Detail);
      
      if (response.Command === 'PrintCompleted') {
        if (response.Detail === ResponseDetailInfo.OK) {
          console.log('✅ Receipt printed successfully!');
        } else {
          console.log('❌ Print failed:', response.Detail);
        }
        printer.removeListener();
        resolve();
      }
    });

    // Print a sample receipt
    printer.print({
      printData: [
        '================================',
        '         ABC BANK ATM          ',
        '================================',
        '',
        'Date: ' + new Date().toLocaleDateString(),
        'Time: ' + new Date().toLocaleTimeString(),
        '',
        'Transaction: Withdrawal',
        'Amount: $100.00',
        'Available Balance: $1,234.56',
        '',
        'Transaction ID: TXN123456789',
        '',
        'Thank you for using ABC Bank!',
        '================================'
      ],
      skipPrintHeaderImage: true
    });
  });
}

async function exampleCashDispenser(): Promise<void> {
  console.log('\n=== Cash Dispenser Example ===');
  
  const dispenser = new CashDispenser();
  
  return new Promise((resolve) => {
    let dispensed = false;
    
    dispenser.addListener((response) => {
      console.log('Dispenser Response:', response.Command, response.Detail);
      
      switch (response.Command) {
        case 'DispenseNoteCompleted':
          console.log('✅ Cash dispensed successfully!');
          dispensed = true;
          break;
          
        case 'ItemsPresented':
          console.log('💰 Cash presented to customer');
          break;
          
        case 'ItemsTaken':
          console.log('✅ Customer took the cash');
          dispenser.removeListener();
          resolve();
          break;
          
        case 'TaskTimeout':
          console.log('⏰ Customer did not take cash - retracting...');
          if (dispensed) {
            dispenser.retractNote();
          }
          break;
          
        case 'RetractNoteCompleted':
          console.log('🔄 Cash retracted');
          dispenser.removeListener();
          resolve();
          break;
      }
    });

    // Check if amount is dispensable first
    dispenser.isAmountDispensable(10000); // $100.00 in cents
    
    // Dispense $100 with 30 second timeout
    setTimeout(() => {
      dispenser.dispenseByAmount({
        amount: 10000, // $100.00 in cents
        takeNoteTimeout: 30000, // 30 seconds
        present: true
      });
    }, 1000);
  });
}

async function exampleCardReader(): Promise<void> {
  console.log('\n=== Card Reader Example ===');
  
  const cardReader = new CardReader();
  
  return new Promise((resolve) => {
    cardReader.addListener((response) => {
      console.log('Card Reader Response:', response.Command, response.Detail);
      
      switch (response.Command) {
        case 'CardReadCompleted':
          if (response.Detail === ResponseDetailInfo.OK) {
            console.log('✅ Card read successfully!');
            console.log('Card Data:', response.cardData || 'No card data available');
            
            // Eject the card after reading
            setTimeout(() => {
              cardReader.ejectCard();
            }, 2000);
          } else {
            console.log('❌ Card read failed:', response.Detail);
            cardReader.removeListener();
            resolve();
          }
          break;
          
        case 'EjectCardCompleted':
          console.log('✅ Card ejected successfully!');
          cardReader.removeListener();
          resolve();
          break;
          
        case 'TaskTimeout':
          console.log('⏰ Card read timeout');
          cardReader.removeListener();
          resolve();
          break;
      }
    });

    // Start card reading with 30 second timeout
    console.log('📱 Please insert your card...');
    cardReader.readCard(30000, 'AllTrack');
  });
}

// Advanced example: Transaction flow
async function exampleTransactionFlow(): Promise<void> {
  console.log('\n=== Complete Transaction Example ===');
  
  const cardReader = new CardReader();
  const dispenser = new CashDispenser();
  const printer = new ReceiptPrinter();
  
  try {
    // Step 1: Read card
    console.log('1. Reading card...');
    await new Promise((resolve, reject) => {
      cardReader.addListener((response) => {
        if (response.Command === 'CardReadCompleted') {
          if (response.Detail === ResponseDetailInfo.OK) {
            cardReader.removeListener();
            resolve(response);
          } else {
            reject(new Error('Card read failed'));
          }
        }
      });
      cardReader.readCard(30000);
    });
    
    // Step 2: Dispense cash
    console.log('2. Dispensing cash...');
    await new Promise((resolve, reject) => {
      dispenser.addListener((response) => {
        if (response.Command === 'ItemsTaken') {
          dispenser.removeListener();
          resolve(response);
        } else if (response.Command === 'TaskError') {
          reject(new Error('Cash dispense failed'));
        }
      });
      dispenser.dispenseByAmount({ amount: 5000 }); // $50
    });
    
    // Step 3: Print receipt
    console.log('3. Printing receipt...');
    await new Promise((resolve, reject) => {
      printer.addListener((response) => {
        if (response.Command === 'PrintCompleted') {
          if (response.Detail === ResponseDetailInfo.OK) {
            printer.removeListener();
            resolve(response);
          } else {
            reject(new Error('Print failed'));
          }
        }
      });
      printer.print({
        printData: ['Transaction completed successfully!']
      });
    });
    
    // Step 4: Eject card
    console.log('4. Ejecting card...');
    await new Promise((resolve) => {
      cardReader.addListener((response) => {
        if (response.Command === 'EjectCardCompleted') {
          cardReader.removeListener();
          resolve(response);
        }
      });
      cardReader.ejectCard();
    });
    
    console.log('✅ Transaction completed successfully!');
    
  } catch (error) {
    console.error('❌ Transaction failed:', error);
  }
}

// Run the examples
main().catch(console.error);
