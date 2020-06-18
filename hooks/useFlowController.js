import { useContext } from 'react';
import FlowControllerContext from '../context/FlowControllerContext';

const useFlowController = () => useContext(FlowControllerContext);

export default useFlowController;
