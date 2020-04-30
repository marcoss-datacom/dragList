import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragDisabled ? 'lightgray' : props.isDragging ? 'lightgreen' : 'white')};
`;

export default class Task extends React.Component {
  render() {
    //const isDragDisabled = this.props.task.id === 'task-1';
    //isDragDisabled={isDragDisabled}
    //isDragDisabled={isDragDisabled}
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index} >
        {(provided, snapshot) => (
          <Container
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >{this.props.task.content}</Container>
        )}
      </Draggable>
    );
  }
}