import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
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
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  links: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '90%',
    width: '100%',
  },
}));

const ShareModal = ({ id }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
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
        onClick={handleOpen}
      >
        <ShareIcon />
      </IconButton>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography align='center' variant='h5'>
              Share the recipe by
            </Typography>
            <div className={classes.links}>
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
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ShareModal;
