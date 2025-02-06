import { ConsoleLogger, Injectable, LoggerService } from '@nestjs/common';

/**
 * extends:
Used for inheritance between classes.
A class extends another class to inherit its properties and behavior (fields and methods).
Represents an "is-a" relationship (e.g., a Dog is-a Animal).
A class can only extend one class (single inheritance).

 * implements:
Used for a class to implement an interface.
A class implements an interface to provide concrete implementations for the methods declared in the interface.
Represents an "is-able-to" relationship (e.g., a Car is-able-to be Drivable).
A class can implement multiple interfaces.
 */
@Injectable()
export class CustomLogger extends ConsoleLogger implements LoggerService {
  constructor(context?: string) {
    super();
    this.setLogLevels(['warn', 'debug', 'error']);
    this.setContext(context);
  }

  log(message: string) {
    // Add custom log formatting or logic
    super.log(message);
  }

  error(message: string) {
    // Add custom error handling
    super.error(message)
  }

  warn(message: string) {
    // Add custom warning handling
    super.warn(message);
  }

  debug(message: string) {
    // Add custom debug handling
    super.debug(message);
  }

  verbose(message: string) {
    // Add custom verbose handling
    super.verbose(message);
  }
}
