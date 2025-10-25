---
layout: page
permalink: /Talks/
title: Talks
description: A collection of invited talks and oral presentations.
nav: true
nav_order: 6
---

## Invited Talks

<div class="timeline-section">
  <div class="timeline">
    <!-- Add your invited talks here -->
    <div class="timeline-item">
      <div class="timeline-date">Oct 2024</div>
      <div class="timeline-content">
        <h4>Advanced Computer Vision in Medical Imaging</h4>
        <p class="venue">European Conference on Medical AI</p>
        <p class="location">Barcelona, Spain</p>
        <p class="description">Presented novel approaches to organ assessment using deep learning techniques for transplantation medicine.</p>
      </div>
    </div>
    
    <div class="timeline-item">
      <div class="timeline-date">Jun 2024</div>
      <div class="timeline-content">
        <h4>Machine Learning Applications in Surgery</h4>
        <p class="venue">International Surgery Symposium</p>
        <p class="location">London, UK</p>
        <p class="description">Discussed integration of AI technologies in modern surgical practices and patient outcomes.</p>
      </div>
    </div>
  </div>
</div>

---

## Oral Presentations

<div class="resume-section">
  <!-- Add your oral presentations here -->
  <div class="resume-talk">
    <div class="resume-left">
      <div class="resume-date">September 2024</div>
      <div class="resume-location">Vienna, Austria</div>
    </div>
    <div class="resume-right">
      <h4>AI-Driven Organ Assessment in Transplantation</h4>
      <p class="resume-venue">International Conference on Transplantation Medicine</p>
      <p class="resume-description">Presented research findings on automated organ quality assessment using computer vision and machine learning algorithms.</p>
    </div>
  </div>
  
  <div class="resume-talk">
    <div class="resume-left">
      <div class="resume-date">March 2024</div>
      <div class="resume-location">Boston, USA</div>
    </div>
    <div class="resume-right">
      <h4>Deep Learning in Clinical Research</h4>
      <p class="resume-venue">American Medical Informatics Association Conference</p>
      <p class="resume-description">Discussed the implementation of deep learning models in clinical research workflows and their impact on patient care.</p>
    </div>
  </div>
</div>

<style>
/* Timeline Style for Invited Talks */
.timeline-section {
  margin: 2rem 0;
}

.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1.315rem;
  top: 1rem;
  bottom: 0;
  width: 2px;
  background: var(--global-theme-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2rem;
  top: 1rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--global-theme-color);
  border: 3px solid var(--global-bg-color);
  box-shadow: 0 0 0 1px var(--global-theme-color);
}

.timeline-date {
  color: var(--global-theme-color);
  font-weight: bold;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}

.timeline-content h4 {
  margin: 0 0 0.75rem 0;
  color: var(--global-text-color);
  font-size: 1.2rem;
  line-height: 1.3;
}

.timeline-content .venue {
  font-weight: 600;
  color: var(--global-text-color);
  margin: 0.5rem 0;
  font-size: 1rem;
}

.timeline-content .location {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.timeline-content .description {
  color: var(--global-text-color-light);
  margin: 0.75rem 0 0 0;
  line-height: 1.5;
}

/* Resume Style for Oral Presentations */
.resume-section {
  margin: 2rem 0;
}

.resume-talk {
  display: flex;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--global-divider-color);
}

.resume-talk:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.resume-left {
  flex: 0 0 160px;
  margin-right: 2rem;
}

.resume-date {
  font-weight: bold;
  color: var(--global-theme-color);
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.resume-location {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
}

.resume-right {
  flex: 1;
}

.resume-right h4 {
  margin: 0 0 0.75rem 0;
  color: var(--global-text-color);
  font-size: 1.2rem;
  line-height: 1.3;
}

.resume-venue {
  font-weight: 600;
  margin: 0.5rem 0;
  color: var(--global-text-color);
  font-size: 1rem;
}

.resume-description {
  color: var(--global-text-color-light);
  margin: 0.75rem 0 0 0;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .timeline {
    padding-left: 2rem;
  }
  
  .timeline::before {
    left: 0.75rem;
  }
  
  .timeline-item::before {
    left: -1.75rem;
  }
  
  .resume-talk {
    flex-direction: column;
  }
  
  .resume-left {
    margin-right: 0;
    margin-bottom: 1rem;
    flex: none;
  }
  
  .resume-date {
    display: inline-block;
    margin-right: 1rem;
  }
  
  .resume-location {
    display: inline-block;
  }
}
</style>
