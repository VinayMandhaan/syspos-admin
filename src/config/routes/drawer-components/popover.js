import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as LoginActions from '../../store/Actions/user.actions';
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  dropDownBtn: {
    textTransform: "initial",
    color: theme.palette.text.secondary,
    fontFamily: "MontserratMedium"
  }
}));

export default function AccountPopover() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick} className={classes.dropDownBtn}>
        example@abc.com <ExpandMoreIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{
          width: "200px"
        }}
      >
        {/* <Typography className={classes.typography}>The content of the Popover.</Typography> */}
        <Button color="secondary" onClick={() => { dispatch(LoginActions.remove_user()) }}>Logout</Button>
      </Popover>
    </div>
  );
}