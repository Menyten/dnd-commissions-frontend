import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import PaymentIcon from '@material-ui/icons/Payment';

export const StyledAppBar = styled(AppBar)`
  position: relative;
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0;
`;

export const StyledTitle = styled(Typography)`
  flex-grow: 1;
`;

export const StyledCartItemCard = styled(Card)`
  margin-bottom: ${({ theme }) => `${theme.spacing(1)}px`};
`;

export const StyledDialog = styled(Dialog)`
  display: 'flex';
`;

export const StyledDialogActions = styled(DialogActions)`
  position: sticky;
  bottom: 0;
`;

export const StyledPaymentIcon = styled(PaymentIcon)`
  margin-right: ${({ theme }) => `${theme.spacing(1)}px`};
`;
