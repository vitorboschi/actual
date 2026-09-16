import type {
  PayeeEntity,
  RuleConditionEntity,
} from '@actual-app/core/types/models';

import { useNavigate } from '#hooks/useNavigate';

/**
 * Returns a callback that opens the transactions list filtered down to the
 * given payees.
 */
export function useViewPayeeTransactions() {
  const navigate = useNavigate();

  return (ids: Array<PayeeEntity['id']>) => {
    if (ids.length === 0) {
      return;
    }

    const condition: RuleConditionEntity =
      ids.length === 1
        ? { field: 'payee', op: 'is', value: ids[0], type: 'id' }
        : { field: 'payee', op: 'oneOf', value: ids, type: 'id' };

    void navigate('/accounts', {
      state: {
        goBack: true,
        filterConditions: [condition],
      },
    });
  };
}
