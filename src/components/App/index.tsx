import React, { useReducer, useEffect } from 'react';

import { counterReducer, counterState, INCREMENT, DECREMENT, START_LOADING, RESET_LOADING } from '@store/counter';

import { getRooms } from '@apis/index';
import { roomReducer, roomState, START_ROOMS_LOADING, GET_ROOMS } from '@store/room';

const App = () => {
	const [counter, dispatchCounter] = useReducer(counterReducer, counterState);
	const [room, dispatchRoom] = useReducer(roomReducer, roomState);

	useEffect(() => {
		const fetchRooms = async() => {
			const { data, error } = await getRooms();
			if (!error) {
				dispatchRoom({ type: GET_ROOMS, payload: data });
			} else {
				return error;
			}
		}
		dispatchRoom({ type: START_ROOMS_LOADING });
		fetchRooms();
	}, []);

	const handleIncrement = async (v?: number) => {
		dispatchCounter({ type: START_LOADING });
		v ? dispatchCounter({ type: INCREMENT, payload: v }) : dispatchCounter({ type: INCREMENT });
		dispatchCounter({ type: RESET_LOADING });
	}

	const handleDecrement = async (v?: number) => {
		dispatchCounter({ type: START_LOADING });
		v ? dispatchCounter({ type: DECREMENT, payload: v }) : dispatchCounter({ type: DECREMENT });
		dispatchCounter({ type: RESET_LOADING });
	}

	const { isLoading, rooms } = room;
	const { value } = counter;
	return (
		<div>
			{isLoading ? (
				<div>로딩중..</div>
			) : (
				<>
					{rooms.map((room: any)=> <div key={room.id}>{room.name}</div>)}
				</>
			)}
			
			{value}
			<button onClick={() => handleIncrement()}>+</button>
			<button onClick={() => handleIncrement(10)}>+10</button>
			<button onClick={() => handleDecrement()}>-</button>
			<button onClick={() => handleDecrement(10)}>-10</button>
		</div>
	);
};

export default App;
