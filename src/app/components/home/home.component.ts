import { Component, OnInit } from '@angular/core';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count: number = 0;
  currentSlideData = {
    slideImgUrl:'',
    slideText:'',
    isActive:true,
    counter: 0

  };

  faFileDownload = faFileDownload;
  aboutUs: string =`GIDSFASCO INTEGRATED SERVICES LTD, is a private indigenous Company, focused on providing diverse
  services to the upstream sector of the oil & gas industry in Nigeria and West Africa Region sustainably,
  as well as marketing of oil products and natural mineral resources, with other services ranging from
  Engineering, Procurement, Construction Project Management, Facility Maintenance, Pipeline
  Maintenance, Well services and Vessel Chartering, we adhere to the highest standards of
  professionalism and strive to exceed the expectations of our clients through integrity, imbibing very
  strict safety culture and quality service delivery. To us, safety is not an act but part of our culture which
  ensures we deliver quality services safely. G.I.S LTD is incorporated under the laws of the Federal
  Republic of Nigeria as a wholly owned Nigerian company.`;

  sliderData = [
    {
      slideText: `We provide diverse services to the upstream and downstream
                  sector of the oil and gas industry
                  in Nigeria and the West Africa region`,
      slideImgUrl:"./assets/home/threeEngineers.jpg",
      isActive: true
    },
    {
      slideText:  `We adhere to high standards of professionalism
                    and strive to exceed the expectations of our clients
                    through integrity, imbibbing very strict safety culture and
                    quality service delivery`,
      slideImgUrl:"./assets/home/Oil-spill-clean-up.jpg",
      isActive: true
    },
    {
      slideText: `We provide diverse services to the
                  upstrem sector of the oil and gas industry
                  in Nigeria and the West Africa region`,
      slideImgUrl:"./assets/home/Expansion-Project.jpg",
      isActive: true
    }
];

  services = [
    {
      caption: "Oil Marketing",
      img:"../../../assets/home/Oil-spill-clean-up.jpg",
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit, sed diam nonummy nibh euismod tincidunt
      ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud
      exerci tation ullamcorper sus`
    },
    {
      caption: "Marine Service Provider",
      img:"../../../assets/home/threeEngineers.jpg",
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit, sed diam nonummy nibh euismod tincidunt
      ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud
      exerci tation ullamcorper sus`
    },
    {
      caption: "General Merchandize",
      img:"../../../assets/home/Oil-spill-clean-up.jpg",
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit, sed diam nonummy nibh euismod tincidunt
      ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud
      exerci tation ullamcorper sus`
    },

  ]

  clients=[
    '../../../assets/home/clients_prospects/chevron.png',
    '../../../assets/home/clients_prospects/ExxonMobi.png',
    '../../../assets/home/clients_prospects/NNPC.jpeg',
    '../../../assets/home/clients_prospects/saipem.jpeg',
    '../../../assets/home/clients_prospects/seplat.png',
    '../../../assets/home/clients_prospects/shell.png',
    '../../../assets/home/clients_prospects/total.png',
  ]
  constructor() { }

  slideFn(num: number): void{
    console.log(this.sliderData[num].slideImgUrl);
    this.currentSlideData = {
      slideImgUrl: this.sliderData[num].slideImgUrl,
      slideText: this.sliderData[num].slideText,
      isActive: this.sliderData[num].isActive,
      counter: this.count
     }
  };

  ngOnInit(): void {
    setInterval(()=>{
      if(this.count < this.sliderData.length){
        this.slideFn(this.count);
        this.count++;
      }else{
        this.count = 0; 
      }
    }, 5000)
  }

}
