import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Grid from '@material-ui/core/Grid';
import Column from './components/column'
import styled from 'styled-components';
import Appbar from './components/appBar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Moment from 'moment';


const Container = styled.div`
  display: flex;
`
const Title = styled.h1`
  text-align: center;
  margin-top: 4px;
  margin-bottom: 4px;
`;

class InnerList extends React.Component {
  /*   shouldComponentUpdate(nextprops) {
      if (nextprops.column === this.props.column && nextprops.taskMap === this.props.taskMap && nextprops.index === this.props.index) {
        return false;
      }
      return true;
    } */
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />
  }
}

class App extends React.Component {
  initial = initialData;

  constructor(props) {
    super(props);
    this.state = {
      tasks: this.initial.tasks,
      columns: this.initial.columns,
      columnOrder: this.initial.columnOrder,
      startDate: Moment().startOf('week'),
      title: ''
    };
  }

  componentDidMount() {
    this.populateGrid();
  }

  onDragStart = start => {
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);
    this.setState({
      homeIndex,
    });
  };

  populateGrid = () => {
    const columns = this.state.columns;
    const currentDate = new Moment(this.state.startDate);
    var keys = Object.keys(columns);
    for (var i = 0; i < keys.length; i++) {
      if (i > 0) {
        columns[keys[i]].title = currentDate.add(1, 'd').format("DD ddd");
      }
    }
    this.setState({
      columns
    });

    const initialDate = new Moment(currentDate);
    const title = initialDate.add(-6, 'd').format("Do MMM") + ' To ' + currentDate.format("Do MMM");
    this.setState({
      title: title
    });

  };

  onClickNext = () => {
    this.setState({ startDate: new Moment(this.state.startDate).add(7, 'd') }, () => {
      this.populateGrid();
    });
  };

  onClickPrevious = () => {
    this.setState({ startDate: new Moment(this.state.startDate).add(-7, 'd') }, () => {
      this.populateGrid();
    });
  };

  onDragEnd = result => {
    this.setState({
      homeIndex: null
    });

    document.body.style.color = 'inherit';
    document.body.style.transition = 'inherit';

    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    // Moving in the same list
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);

  };

  render() {
    return (
      <div>
        <Appbar tasks={this.state.tasks} />
        <br />
        <Grid container>
          <Grid item xs={10}>
            <Title>{this.state.title}</Title>
          </Grid>
          <Grid item xs={2}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button onClick={this.onClickPrevious}>Previous</Button>
              <Button onClick={this.onClickNext}>Next</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}>
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {
              provided => (
                <Container {...provided.droppableProps}
                  ref={provided.innerRef}>
                  {this.state.columnOrder.map((columnId, index) => {
                    const column = this.state.columns[columnId];
                    //const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                    //const isDropDisabled = index < this.state.homeIndex;
                    //isDropDisabled={isDropDisabled}
                    return (<InnerList key={column.id} column={column} taskMap={this.state.tasks} index={index} />);
                  })}
                </Container>
              )
            }
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

