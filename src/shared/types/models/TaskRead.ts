/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskStatusEnum } from './TaskStatusEnum';

export type TaskRead = {
    id?: string;
    task_type_id?: string;
    point_id?: string;
    executor_id?: string;
    status?: TaskStatusEnum;
    created_at?: string;
};
