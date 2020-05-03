import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import OutlinedCard from './outlinedcard'

const Container = styled.div`
  margin-bottom: 8px;
  background-color: ${props => (props.isDragDisabled ? 'lightgray' : props.isDragging ? 'lightgreen' : 'white')};
`;
export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index} >
        {(provided, snapshot) => (
          <Container
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          ><OutlinedCard task={this.props.task} />
          </Container>
        )}
      </Draggable>
    );
  }
}