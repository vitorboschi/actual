import type { ReactNode } from 'react';

import { SvgArrowThinRight } from '@actual-app/components/icons/v1';
import type { CSSProperties } from '@actual-app/components/styles';
import { theme } from '@actual-app/components/theme';

import { Cell, CellButton } from '#components/table';

const variantStyles = {
  notice: {
    backgroundColor: theme.noticeBackground,
    border: '1px solid ' + theme.noticeBackground,
    color: theme.noticeTextDark,
    ':hover': { backgroundColor: theme.noticeBackgroundLight },
  },
  neutral: {
    backgroundColor: theme.pillBackground,
    border: '1px solid ' + theme.pillBorder,
    color: theme.pillText,
    ':hover': { backgroundColor: theme.pillBackgroundSelected },
  },
} satisfies Record<string, CSSProperties>;

type PayeePillButtonProps = {
  name: string;
  variant: keyof typeof variantStyles;
  width?: CSSProperties['width'];
  alignItems?: CSSProperties['alignItems'];
  focused: boolean;
  onEdit: () => void;
  onClick: () => void;
  children: ReactNode;
};

export function PayeePillButton({
  name,
  variant,
  width = 'auto',
  alignItems,
  focused,
  onEdit,
  onClick,
  children,
}: PayeePillButtonProps) {
  return (
    <Cell
      name={name}
      width={width}
      alignItems={alignItems}
      focused={focused}
      style={{ padding: '0 10px' }}
      plain
    >
      <CellButton
        style={{
          borderRadius: 4,
          padding: '3px 6px',
          fontSize: 12,
          cursor: 'pointer',
          ...variantStyles[variant],
        }}
        onEdit={onEdit}
        onSelect={onClick}
      >
        {children}
        <SvgArrowThinRight style={{ width: 8, height: 8 }} />
      </CellButton>
    </Cell>
  );
}
