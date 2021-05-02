import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontWeight: 700,
    },
    guestBarHeight: {
      minHeight: '68px',
    },
    bigger: {
      fontSize: '17.5',
      fontWeight: 700,
    },
    mainBlue: {
      backgroundColor: '#0065FF',
      color: '#fff',
    },
  })
);

export default function ButtonAppBar(): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* TODO: Set Background color to transparent and change elevation on scroll */}
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar className={classes.guestBarHeight}>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <Avatar src={`/logo.png`}></Avatar>
          </IconButton>
          <Typography variant='h4' className={classes.title}>
            El Craplo
          </Typography>
          <Button color='secondary'>
            <Typography
              style={{
                color: '#0065FF',
                fontWeight: 600,
                marginRight: '8px',
              }}
            >
              Log in
            </Typography>
          </Button>
          <Button className={classes.mainBlue} variant='contained'>
            <Typography className={classes.bigger}>Sign Up</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}