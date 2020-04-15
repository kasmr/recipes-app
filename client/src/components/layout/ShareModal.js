import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  VKShareButton,
  VKIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
} from 'react-share';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),
    width: 400,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: '1rem',
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 400,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    width: 400,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
}))(MuiDialogActions);

const ShareModal = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label='share'
        style={{ padding: '8px' }}
        onClick={handleClickOpen}
      >
        <ShareIcon />
      </IconButton>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>
          Share the recipe with friends!
        </DialogTitle>
        <DialogContent dividers>
          <Typography align='center'>
            <VKShareButton
              url={`https://recipes-app-mern.herokuapp.com/recipe/${id}`}
              openShareDialogOnClick={true}
            >
              <VKIcon round={true} />
            </VKShareButton>
            <FacebookShareButton
              url={`https://recipes-app-mern.herokuapp.com/recipe/${id}`}
              openShareDialogOnClick={true}
            >
              <FacebookIcon round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://recipes-app-mern.herokuapp.com/recipe/${id}`}
              openShareDialogOnClick={true}
            >
              <TwitterIcon round={true} />
            </TwitterShareButton>
            <TelegramShareButton
              url={`https://recipes-app-mern.herokuapp.com/recipe/${id}`}
              openShareDialogOnClick={true}
            >
              <TelegramIcon round={true} />
            </TelegramShareButton>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            OK thanks!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShareModal;
