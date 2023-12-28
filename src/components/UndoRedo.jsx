/*
 * Undo & Redo button of the application
 */

import { ButtonGroup, Button} from 'react-bootstrap';

import { FaUndo, FaRedo } from "react-icons/fa";

const UndoRedo = () => {
  return (
    <>
      <ButtonGroup>

        {/* Undo Button */}
        <Button variant='secondary'
                size='md' 
                onClick={ ()=> console.log('Undo button clicked') } >
          <FaUndo />
          {' '}
          Undo
        </Button>
      </ButtonGroup>
      {' '}
      <ButtonGroup>

        {/* Redo Button */}
        <Button variant='secondary'
                size='md' 
                onClick={ ()=> console.log('Redo button clicked') } >
          <FaRedo />
          {' '}
          Redo
        </Button>

      </ButtonGroup>
      <br/>
      <br/>
    </>
  );
}

export default UndoRedo;
