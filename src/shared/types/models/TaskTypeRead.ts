/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriorityEnum } from './PriorityEnum';

export type TaskTypeRead = {
    id?: string;
    name: string;
    priority: PriorityEnum;
    minimal_grade_id?: string;
    duration?: number;
    created_at?: string;
};
