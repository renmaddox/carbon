/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type DataTableSortState = 'NONE' | 'DESC' | 'ASC';

/**
 * We currently support the following sorting states for DataTable headers,
 * namely: `NONE` for no sorting being applied, and then `DESC` and `ASC` for
 * the corresponding direction of the sorting order.
 */
export const sortStates: Record<DataTableSortState, DataTableSortState> = {
  NONE: 'NONE',
  DESC: 'DESC',
  ASC: 'ASC',
};
