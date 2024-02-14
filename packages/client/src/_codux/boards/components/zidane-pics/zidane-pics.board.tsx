import { createBoard } from '@wixc3/react-board';
import { Zidane_pics } from '../../../../components/zidane-pics/zidane-pics';

export default createBoard({
    name: 'Zidane_pics',
    Board: () => <Zidane_pics />,
    isSnippet: true,
});