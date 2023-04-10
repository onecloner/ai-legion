/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Action {
  /**
   * The ID of the agent who initiated this action
   */
  sourceAgentId: string;
  /**
   * The payload that's specific to a particular action.
   */
  payload: NoOpAction | SendMessageAction;
  /**
   * Use this field to articulate your thought process in choosing this action.
   */
  comment: string;
}
/**
 * Do nothing.
 */
export interface NoOpAction {
  type: "no-op";
}
/**
 * Send a message to another agent.
 */
export interface SendMessageAction {
  type: "send-message";
  /**
   * The target agent's ID.
   */
  agentId?: string;
  /**
   * The content of the message.
   */
  message?: string;
}
