import StarMatch from './StarMatch';
import { useState } from 'react';

const App = props => {
    const [gameId, setGameId] = useState(1);
    return(
        <StarMatch key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    );
}

export default App;