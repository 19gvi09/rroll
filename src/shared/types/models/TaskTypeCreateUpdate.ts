/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriorityEnum } from './PriorityEnum';

export type TaskTypeCreateUpdate = {
    id?: string;
    name: string;
    priority: PriorityEnum;
    minimal_grade_id?: string;
};
