import { Button, Flex } from '@contentful/f36-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { undo, redo } from '../features/history/historySlice';

const Toolbar = () => {
  const dispatch = useDispatch();
  const { past, future } = useSelector((state: RootState) => state.history);

  return (
    <Flex padding="spacingM" style={{ borderBottom: '1px solid #e0e0e0' }}>
      <Button
        variant="secondary"
        size="small"
        onClick={() => dispatch(undo())}
        isDisabled={past.length === 0}
      >
        Undo
      </Button>
      <Button
        variant="secondary"
        size="small"
        onClick={() => dispatch(redo())}
        isDisabled={future.length === 0}
        style={{ marginLeft: 'spacingS' }}  // Changed from marginLeft prop to style
      >
        Redo
      </Button>
    </Flex>
  );
};

export default Toolbar;