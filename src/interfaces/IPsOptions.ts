export type PsOptionSelection = "tty" | "user" | "all" | "running";

/**
 * Represents a single running process
 *
 * @export
 * @interface IPsOptions
 */
export interface PsOptions {
    selection?: PsOptionSelection;
}
