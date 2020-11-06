import React from "react";
import Background from "../components/Background";

function Chemistry() {
  return (
    <>
    <Background image='../assets/images/tidepool.jpg' />
    <div className='container nav-avoid bottom-space'>
      <div className='row'>
        <div className='col-md-8'>
          <h3>PUBLICATIONS</h3>
          <br />

          <p>
            <b>Reactions of group III biheterocyclic complexes.</b> Carver, C. T.; Benitez, D.; Miller, K. L.; Williams,
          B. N.; Tkatchouk, E.; Goddard, W. A.; Diaconescu, P. L. J. Am. Chem. Soc. 2009, 131, 10269-10278.
        </p>

          <p>
            <b>Dearomatization reactions of N-heterocycles mediated by group III complexes.</b> Miller, K. L.; Williams,
          B. N.; Benitez, D.; Carver, C. T.; Ogilby, K. R.; Tkatchouk, E.; Goddard III, W. A.; Diaconescu, P. L. J. Am. Chem.
          Soc. 2010, 132, 342-355.
        </p>

          <p>
            <b>Reactions of aromatic N-heterocycles with a lutetium benzyl complex supported by a ferrocene-diamide
            ligand.</b> Wong, A. W.; Miller, K. L.; Diaconescu, P. L. Dalton Trans. 2010, 39, 6726-6731.
        </p>

          <p>
            <b>Reactions of imidazoles with electrophilic metal alkyl complexes.</b> Miller, K. L.; Williams, B. N.;
          Carver, C. T.; Diaconescu, P. L. Organometallics 2010, 29, 2272-2281.
        </p>

          <p>
            <b>Group 3 metal complexes of radical-anionic 2,2’-bipyridyl ligands.</b> Williams, B. N.; Huang, W.; Miller,
          K. L.; Diaconescu, P. L. Inorg. Chem. 2010, 49, 11493-11498.
        </p>

          <p>
            <b>An unusual hydrogen migration/C-H activation reaction with group 3 metals.</b> Williams, B. N.; Benitez,
          D.; Miller, K. L.; Tkatchouk, E.; Goddard, W. A.; Diaconescu, P. L. J. Am. Chem. Soc. 2011, 133, 4680-4683.
        </p>

          <p>
            <b>Synthesis of symmetrically and unsymmetrically 3,5-dimethylbenzyl-substituted 1,1′-ferrocene diamines.</b> 
          Lee, J. A.; Williams, B. N.; Ogilby, K. R.; Miller, K. L.; Diaconescu, P. L. J. Organomet. Chem. 2011, 696,
          4090-4094.
        </p>
        </div>

        <figure className='col-md-4'>
          <img src={require('../assets/images/astronaut.jpg')} alt='Graduation' id='astronaut' className="img-fluid" />
          <figcaption>Me at graduation, with astronaut Anna Lee Fisher and colleague Dr. Selma Duhović</figcaption>
        </figure>
      </div>

      <div className='row'>
        <div className='col-md-12'>
          <br />

          <h4>PRESENTATIONS</h4>
          <p>
            <b>Electrophilic metal centers for the functionalization of inert bonds and molecules.</b> Presented at the
          Southern California Organometallics Conference Fall 2008.
        </p>

          <p>
            <b>Dearomatization reactions of N-heterocycles mediated by 
              highly electrophilic group III complexes.</b> Presented at the Southern California Organometallics Conference Fall 2009.
        </p>

          <p>
            <b>Use of highly reactive metal centers to effect the dearomatization 
              and ring-opening of N-heterocycles.</b> Presented at the 239th American Chemical Society Conference at San Francisco, 2010.
        </p>

          <p>
            <b>Interaction of highly reactive metal centers with a redox-active ferrocene-based ligand.</b> Presented at
          the 241st American Chemical Society Conference at Anaheim, 2011.
        </p>

          <p>
            <b>Electronic communication between bridged ferrocene centers, 
              mediated by group III and group IV metals.</b> Presented at the Southern California Organometallics Conference Winter 2012.
        </p>

          <p>
            <b>Unique properties of electrophilic metal centers supported by ferrocene diamide ligands.</b> Presented at
          the Southern California Organometallics Conference Spring 2012, and as an exit seminar for the UCLA inorganic
          chemistry department.
        </p>

          <br />

          <h5>POSTERS</h5>
          <p>
            <b>Exploring the Reductive Reactivity of Lanthanum Dinitrogen Complexes. </b>Presented at the Undergraduate
          Research Opportunities Program conference at UC Irvine, 2007.
        </p>

        </div>
      </div>
    </div>
    </>
  )
}

export default Chemistry;