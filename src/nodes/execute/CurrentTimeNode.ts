import { ExecuteNode } from '@gravitydock/types';
import type { InputDefinition, OutputDefinition, PropertyDefinition } from '@gravitydock/types';

export class CurrentTimeNode extends ExecuteNode {
    readonly typeId = 'time-current';
    readonly displayName = 'Current Time';
    readonly category = { name: 'Time', accent: 'sky-500' as any };
    readonly visible = true;

    readonly inputs: InputDefinition[] = [];

    readonly outputs: OutputDefinition[] = [
        { name: 'Time', outputType: 'time:datetime' }
    ];

    readonly properties: PropertyDefinition[] = [];

    async evaluate(inputs: Record<string, any>, properties: Record<string, any>): Promise<Record<string, any>> {
        return {
            'Time': new Date().toISOString()
        };
    }
}
