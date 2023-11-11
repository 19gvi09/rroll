/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PointCreateUpdate } from '../models/PointCreateUpdate';
import type { PointRead } from '../models/PointRead';
import type { TaskCreateUpdate } from '../models/TaskCreateUpdate';
import type { TaskRead } from '../models/TaskRead';
import type { TaskTypeCreateUpdate } from '../models/TaskTypeCreateUpdate';
import type { TaskTypeRead } from '../models/TaskTypeRead';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TaskService {

    /**
     * Create Task
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createTaskApiTaskTaskPost(
requestBody: TaskCreateUpdate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/task/task/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Task
     * @param requestBody 
     * @returns TaskRead Successful Response
     * @throws ApiError
     */
    public static updateTaskApiTaskTaskPatch(
requestBody: TaskCreateUpdate,
): CancelablePromise<TaskRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/task/task/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Task
     * @param taskId 
     * @returns TaskRead Successful Response
     * @throws ApiError
     */
    public static getTaskApiTaskTaskTaskIdGet(
taskId: string,
): CancelablePromise<TaskRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/task/task/{task_id}/',
            path: {
                'task_id': taskId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Tasks
     * @returns TaskRead Successful Response
     * @throws ApiError
     */
    public static getTasksApiTaskTasksGet(): CancelablePromise<Array<TaskRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/task/tasks/',
        });
    }

    /**
     * Get Tasks
     * @param userId 
     * @param date 
     * @returns TaskRead Successful Response
     * @throws ApiError
     */
    public static getTasksApiTaskTasksUserIdGet(
userId: string,
date: string = '2023-11-11T06:55:06.304142',
): CancelablePromise<Array<TaskRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/task/tasks/{user_id}/',
            path: {
                'user_id': userId,
            },
            query: {
                'date': date,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Task
     * @param taskId 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteTaskApiTaskTaskIdDelete(
taskId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/task/{task_id}/',
            path: {
                'task_id': taskId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Point
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createPointApiTaskPointPost(
requestBody: PointCreateUpdate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/task/point/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Point
     * @param requestBody 
     * @returns PointRead Successful Response
     * @throws ApiError
     */
    public static updatePointApiTaskPointPatch(
requestBody: PointCreateUpdate,
): CancelablePromise<PointRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/task/point/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Point
     * @param pointId 
     * @returns PointRead Successful Response
     * @throws ApiError
     */
    public static getPointApiPointPointPointIdGet(
pointId: string,
): CancelablePromise<PointRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/point/point/{point_id}/',
            path: {
                'point_id': pointId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Points
     * @returns PointRead Successful Response
     * @throws ApiError
     */
    public static getPointsApiTaskPointsGet(): CancelablePromise<Array<PointRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/task/points/',
        });
    }

    /**
     * Delete Point
     * @param pointId 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deletePointApiTaskPointIdDelete(
pointId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/task/{point_id}/',
            path: {
                'point_id': pointId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Task Type
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createTaskTypeApiTaskTaskTypePost(
requestBody: TaskTypeCreateUpdate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/task/task_type/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Task Type
     * @param requestBody 
     * @returns TaskTypeRead Successful Response
     * @throws ApiError
     */
    public static updateTaskTypeApiTaskTaskTypePatch(
requestBody: TaskTypeCreateUpdate,
): CancelablePromise<TaskTypeRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/task/task_type/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Task Type
     * @param taskTypeId 
     * @returns TaskTypeRead Successful Response
     * @throws ApiError
     */
    public static getTaskTypeApiTaskTypeTaskTypeTaskTypeIdGet(
taskTypeId: string,
): CancelablePromise<TaskTypeRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/task_type/task_type/{task_type_id}/',
            path: {
                'task_type_id': taskTypeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Task Types
     * @returns TaskTypeRead Successful Response
     * @throws ApiError
     */
    public static getTaskTypesApiTaskTaskTypesGet(): CancelablePromise<Array<TaskTypeRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/task/task_types/',
        });
    }

    /**
     * Delete Task Type
     * @param taskTypeId 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteTaskTypeApiTaskTaskTypeIdDelete(
taskTypeId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/task/{task_type_id}/',
            path: {
                'task_type_id': taskTypeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
