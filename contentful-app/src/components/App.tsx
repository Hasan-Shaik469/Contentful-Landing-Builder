// import { AppProps as ContentfulAppProps } from '@contentful/app-sdk';
// import { Flex } from '@contentful/f36-components';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../store/store';
// import ComponentPalette from './ComponentPalette';
// import LayoutCanvas from './LayoutCanvas';
// import Toolbar from './Toolbar';

// interface AppProps extends ContentfulAppProps {
//   fieldValue: any;
//   setFieldValue: (value: any) => void;
// }

// const App = ({ fieldValue, setFieldValue }: AppProps) => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { blocks } = useSelector((state: RootState) => state.layout);

//   // Load initial state from Contentful field
//   useEffect(() => {
//     if (fieldValue?.blocks) {
//       dispatch({ type: 'layout/setBlocks', payload: fieldValue.blocks });
//     }
//   }, [dispatch, fieldValue]);

//   // Auto-save to Contentful when blocks change
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setFieldValue({ blocks });
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [blocks, setFieldValue]);

//   return (
//     <Flex flexDirection="column" style={{ height: '100vh' }}>
//       <Toolbar />
//       <Flex flex={1} style={{ overflow: 'hidden' }}>
//         <ComponentPalette />
//         <LayoutCanvas />
//       </Flex>
//     </Flex>
//   );
// };

// export default App;