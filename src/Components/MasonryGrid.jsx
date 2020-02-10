/**
 * Code credited to https://codepen.io/golle404/pen/wWoXwz
 */

import React, { Component } from "react";
import { debounce } from "lodash";
import './MasonryGrid.css';

class MasonryGrid extends Component {
	render(){
		return (
			<div className="container">
				<div className="masonry-container">
					<Masonry breakPoints={this.props.breakPoints}>
						{this.props.images.map((image, id) => {
							return (
								<Tile src={image} key={image} />
							) 
						})}
					</Masonry>
				</div>
			</div>
		)
	}
}

const Tile = ({src}) => {
  return (
    <div className="tile">
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
