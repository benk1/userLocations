import React, { useState } from 'react';
import Card from '../../shared/components/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './PlaceItem.css';

const PlaceItem = ({
	id,
	image,
	description,
	title,
	coordinates,
	address,
	creatorId,
}) => {
	const [showMap, setShowMap] = useState(false);

	const handleOpenMap = () => setShowMap(true);

	const handleCloseMap = () => setShowMap(false);
	return (
		<>
			<Modal
				show={showMap}
				onCancel={handleCloseMap}
				header={address}
				contentClass="place-item__modal-content"
				footerClass="place-item__modal-actions"
				footer={<Button onClick={handleCloseMap}>CLOSE</Button>}
			>
				<div className="map-container">
					<h2>THE MAP</h2>
				</div>
			</Modal>
			<li className="place-item">
				<Card className="place-item__content">
					<div className="place-item__image">
						<img src={image} alt={title} />
					</div>

					<div className="place-item__info">
						<h2>{title}</h2>
						<h3>{address}</h3>
						<p>{description}</p>
					</div>

					<div className="place-item__actions ">
						<Button inverse onClick={handleOpenMap}>
							VIEW ON MAP
						</Button>
						<Button to={`/places/${id}`}>EDIT</Button>
						<Button danger>DELETE</Button>
					</div>
				</Card>
			</li>
		</>
	);
};

export default PlaceItem;
