import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import CaseTitle from './CaseTitle.js';
import './Case.css';

const CaseThumbnail = styled(Button)({
  border: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  textTransform: 'none',
  color: '#000',
  '&:hover': {
     border: 'none',
     backgroundColor: 'inherit',
     transition: 'all ease 0.35s, transform 0.35s, -webkit-transform 0.35s',
     opacity: '0.7'
  },
  '& .MuiButton-label': {
    flexDirection: 'column'
  }
});

function CaseDialog(props) {
  const { onClose, open, dialogContent, closeColor } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullScreen onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className="close-button" onClick={handleClose}>
      	<div className="lr" style={{backgroundColor: closeColor}}>
          <div className="rl" style={{backgroundColor: closeColor}}>
          </div>
        </div>
      </div>
      <img src={dialogContent} width="100%" />
    </Dialog>
  );
}

export default function Case({thumbnail, content, title, subtitle, closeColor}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <CaseThumbnail variant="outlined" color="primary" onClick={handleClickOpen}>
        <img src={thumbnail} width="100%" />
        <CaseTitle title={title} subtitle={subtitle} />
      </CaseThumbnail>
      <CaseDialog open={open} onClose={handleClose} dialogContent={content} closeColor={closeColor} />
    </>
  );
}