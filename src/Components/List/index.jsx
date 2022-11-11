import React from 'react'
import './_List.scss'

const List = ({ items }) => {
	return (
		<ul className='list'>
			{items.map(item => (
				<li key={item.name} className={item.active ? 'active' : ''}>
					{item.icon ? (
						item.icon
					) : (
						<i className={`badge badge--${item.color}`}></i>
					)}
					<span>{item.name}</span>
				</li>
			))}
		</ul>
	)
}

export default List
