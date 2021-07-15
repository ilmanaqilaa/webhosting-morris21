import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Riwayat Pendidikan'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  TKQ Al-Amanah
                  </h3>
                <p className="m-0" class="justify">
                  TKQ Al-Amanah berada di Kecamatan Coblong, Kota Bandung, Jawa Barat. Yang mengajarkan baca, tulis, dan Al-Quran serta hafalan surat pendek dan ayat pilihan.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/TK.png')}
                  alt="Features split 01"
                  width={100}
                  height={200} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  SDN.Dr.CIPTO
                  </h3>
                <p className="m-0" class= "justify" >
                  SDN.Dr.CIPTO terletak di Kec. Cicendo, Kota Bandung, Jawa Barat. Dahulu SDN Cipto terpisah dengan SDN Pajajaran karena bertetanggaan, hanya saja dengan perkembangan saat ini kedua SD tersebut menjadi satu dengan nama SDN 016 Cipto Pajajaran.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/SD.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  SMAS ANGKASA
                  </h3>
                  <h3 className="mt-0 mb-12">
                  LANUD HUSEIN SASTERA NEGARA
                  </h3>
                <p className="m-0" class= "justify">
                SMAS Angkasa berada di Husein Sastranegara, Jl. LMU Subagio Kel, Husen Sastranegara, Kec. Cicendo, Kota Bandung, Jawa Barat. Sistem yang diajarkan pada SMA ini selain akademis SMA Angkasa melatih kedisiplinan yang sangat ketat agar siswa dan siswi menjadi lebih taat terhadap peraturan dan juga tegas dalam teguh pendirian. SMA Angkasa dinaungi oleh Yayasan Ardhya Garini serta TNI-AU.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/SMA.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;