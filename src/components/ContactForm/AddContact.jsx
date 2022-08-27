import ContactForm from '../../components/ContactForm/ContactForm';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Container } from './ContactForm.styled';
import { IconButton, Popover, Typography } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CloseIcon from '@mui/icons-material/Close';
import { forwardRef, useState } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
  return (
    <Slide direction="up" ref={ref} {...props} sx={{ overflowY: 'hidden' }} />
  );
});

export default function AlertDialogSlide() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);

  return (
    <>
      <IconButton
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ padding: '4px' }}
      >
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <AddCircleRoundedIcon color="primary" sx={{ fontSize: 80 }} />
        </Typography>

        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={openPopover}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>Add new Contact</Typography>
        </Popover>
      </IconButton>
      <Container>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          // onClose={handleClose}
          sx={{ overflowY: 'hidden' }}
          aria-describedby="alert-dialog-slide-description"
        >
          <IconButton
            variant="outlined"
            onClick={handleClose}
            sx={{ marginLeft: 'auto' }}
          >
            <CloseIcon />
          </IconButton>

          <DialogTitle>{'AddContact'}</DialogTitle>
          <ContactForm onClose={handleClose} />
        </Dialog>
      </Container>
    </>
  );
}
