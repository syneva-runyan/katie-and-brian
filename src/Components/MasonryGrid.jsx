/**
 * Code credited to https://codepen.io/golle404/pen/wWoXwz
 */

import React, { Fragment, useState } from "react";
import { Swipeable } from 'react-swipeable'
import Modal from 'react-modal';
import { debounce } from "lodash";
import './MasonryGrid.css';

Modal.setAppElement('#root');

const customStyles = {
	border: "0",
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)',
		width: '90vw',
		height: '90vh',
		display: 'flex',
		alignItems: "center",
		justifyContent: "center",
		background: "transparent",
		border: '0',
	}
};

function MasonryGrid({ breakPoints, images }) {
	const [modalIsOpen,setIsOpen] = useState(false);
	const [selectedImgIdx, setSelectedImgIdx] = useState(null);
	function openModal(imgIdx) {
		setSelectedImgIdx(imgIdx);
		setIsOpen(true);
	}

	function incSelectedImg() {
		const newImgIdx = (selectedImgIdx + 1) % images.length;
		setSelectedImgIdx(newImgIdx);
	}

	function decSelectedImg() {
		let newImgIdx = (selectedImgIdx - 1);
		if(newImgIdx < 0) {
			newImgIdx = images.length -1;
		}
		setSelectedImgIdx(newImgIdx);
	}

	function afterOpenModal() {
		document.body.classList.add("lock");
	}

	function closeModal(){
		setIsOpen(false);
		document.body.classList.remove("lock");

	}

	return (
		<Fragment>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
				shouldCloseOnOverlayClick
			>
				<Swipeable className="modal-wrapper" onSwipedLeft={decSelectedImg} onSwipedRight={incSelectedImg}>
					<button className="modal-close reset-button" onClick={closeModal}></button>
					<img className="modal-img" alt="src" src={images[selectedImgIdx]}></img>
					<button className="reset-button left-arrow" onClick={decSelectedImg}></button>
					<button className="reset-button right-arrow" onClick={incSelectedImg}></button>
				</Swipeable>
			</Modal>
			<div className="container">
				<div className="masonry-container">
					<Masonry breakPoints={breakPoints}>
						{images.map((image, idx) => {
							return (
								<Tile imgIdx={idx} onClick={openModal} src={image} key={image} />
							) 
						})}
					</Masonry>
				</div>
			</div>
		</Fragment>
	)
}

const Tile = ({onClick, src, imgIdx}) => {
  const onClickFn =  (e) => {
	  e.preventDefault();
	  onClick(imgIdx);
  }
  return (
    <div className="tile" onClick={onClickFn}>
		<img src={src} alt={src} />
	</div>
  );
};

class Masonry extends React.Component {
	constructor(props){
		super(props);
		this.state = {columns: 1};
		const onResizeBound = this.onResize.bind(this);
		this.onResizeDebouced = debounce(onResizeBound, 500);
		window.scrollTo(0,0);
	}
	componentDidMount(){
		this.onResizeDebouced();
		window.addEventListener('resize', this.onResizeDebouced)	
	}
	
	getColumns(w){
		return this.props.breakPoints.reduceRight( (p, c, i) => {
			return c < w ? p : i;
		}, this.props.breakPoints.length) + 1;
	}
	
	onResize(){
		if(this.refs.Masonry) {
			const columns = this.getColumns(this.refs.Masonry.offsetWidth);
			if(columns !== this.state.columns){
				this.setState({columns: columns});	
			}
		}	
	}
	
	mapChildren(){
		let col = [];
		const numC = this.state.columns;
		for(let i = 0; i < numC; i++){
			col.push([]);
		}
		return this.props.children.reduce((p,c,i) => {
			p[i%numC].push(c);
			return p;
		}, col);
	}
	
	render(){
		return (
			<div className="masonry" ref="Masonry">
				{this.mapChildren().map((col, ci) => {
					return (
						<div className="column" key={ci} >
							{col.map((child, i) => {
								return <div key={i} >{child}</div>
							})}
						</div>
					)
				})}
			</div>
		)
	}
}


export default MasonryGrid;
