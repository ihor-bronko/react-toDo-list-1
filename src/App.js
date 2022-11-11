import React from 'react'
import List from './Components/List'
import MenuSvg from './Components/MenuSvg/MenuSvg'

function App() {
	return (
		<div className='todo'>
			<div className='todo__sidebar'>
				<List
					items={[
						{ icon: <MenuSvg />, name: 'Все задачи', active: true },
						{ color: 'green', name: 'Покупки' },
						{ color: 'blue', name: 'Фронтенд' },
						{ color: 'pink', name: 'Фильмы и сериалы' },
						{ color: 'cyan', name: 'Книги' },
						{ color: 'grey', name: 'Личное' }
					]}
				/>
			</div>
			<div className='todo_tasks'>Фронтенд</div>
		</div>
	)
}

export default App
