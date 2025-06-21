import { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ComponentPalette from './ComponentPalette';
import LayoutCanvas from './LayoutCanvas';
import Toolbar from './Toolbar';
import { loadInitialData, saveLayout } from '../features/layout/layoutSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function LayoutBuilder({ sdk }: { sdk: any }) {
  const dispatch = useAppDispatch();
  const { blocks } = useAppSelector(state => state.layout);

  useEffect(() => {
    // Load initial data from Contentful entry
    const entryData = sdk.entry.fields.layoutConfig.getValue() || { blocks: [] };
    dispatch(loadInitialData(entryData));
  }, [sdk, dispatch]);

  const handleSave = () => {
    sdk.entry.fields.layoutConfig.setValue({ blocks });
    sdk.entry.save();
  };

  return (
    <div className="layout-builder">
      <Toolbar onSave={handleSave} />
      <div className="builder-container">
        <ComponentPalette />
        <DragDropContext onDragEnd={result => dispatch(moveBlock(result))}>
          <LayoutCanvas />
        </DragDropContext>
      </div>
    </div>
  );
}