import React from 'react';
import './PortfolioGrid.css';

const PortfolioGrid = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A thrilling adventure game.',
            image: 'path/to/image1.jpg',
        },
        {
            title: 'Project Two',
            description: 'An immersive simulation experience.',
            image: 'path/to/image2.jpg',
        },
        {
            title: 'Project Three',
            description: 'A fast-paced action game.',
            image: 'path/to/image3.jpg',
        },
        // Add more projects as needed
    ];

    return (
        <div className="portfolio-grid">
            {projects.map((project, index) => (
                <div className="portfolio-item" key={index}>
                    <img src={project.image} alt={project.title} className="portfolio-image" />
                    <div className="portfolio-info">
                        <h3 className="portfolio-title">{project.title}</h3>
                        <p className="portfolio-description">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PortfolioGrid;