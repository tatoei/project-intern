import { PipeTransform } from '@nestjs/common';
export declare class FileSizeValidationPipe implements PipeTransform {
    transform(value: {
        size: number;
    }): boolean;
}
