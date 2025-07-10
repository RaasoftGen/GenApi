import { TerminalConfig } from './TerminalConfig';
import { ValidatePasscodeDetail } from './ValidatePasscodeDetail';
export declare class ValidatePasscode_OutputSchema {
    data: ValidatePasscodeDetail;
    terminal_config: TerminalConfig;
    constructor(data: ValidatePasscodeDetail, terminal_config: TerminalConfig);
}
