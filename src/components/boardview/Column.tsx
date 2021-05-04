import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Column, Ticket } from '../../API';
import TicketComponent from './Ticket';
import { Droppable } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme: Theme) => ({
  column: {
    minWidth: '272px',
    maxWidth: '272px',
    minHeight: '78px',
    color: '#172b4d',
    backgroundColor: '#ebecf0',
    padding: '8px',
    borderRadius: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: '4px',
    marginLeft: '8px',
  },
}));

interface Props {
  column: Column | null;
}

export default function ColumnComponent({ column }: Props): ReactElement {
  const classes = useStyles();
  if (column && column.id) {
    return (
      <Grid container direction='column' className={classes.column}>
        <Typography className={classes.name}>{column?.name}</Typography>
        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              // style={getListStyle(snapshot.isDraggingOver)}
            >
              {column?.tickets?.items?.map((ticket: Ticket | null, key) => (
                <TicketComponent
                  key={ticket?.id}
                  ticket={ticket}
                  keyProp={key}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Grid>
    );
  } else {
    return <div>Something went wrong :(</div>;
  }
}
