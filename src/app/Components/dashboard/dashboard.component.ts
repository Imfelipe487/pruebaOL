import { Component, OnInit } from '@angular/core';
import { DevelopersService } from 'src/app/core/services/developer.service';
import { Chart, registerables } from 'node_modules/chart.js';
import { Commit } from 'src/app/core/interfaces/commit';
import { Server } from 'src/app/core/interfaces/server';
import { DeliveryReport } from 'src/app/core/interfaces/delivery-reports';
import { Notification } from 'src/app/core/interfaces/notification';
import { ServiceWeatherService } from 'src/app/core/services/service-weather.service';


Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  numberProject: number = 0;
  projectsInDeploy: number = 0;
  totalNcs: number = 0;
  totalErrors: number = 0;
  dataCommits: Commit[] = [];
  dataServer!: Server;
  deliveryTimeUse: number = 0;
  totalProjectDeploy: number = 0;
  dataReport!: DeliveryReport;
  dataPercentage: string = '';
  dataCycleDate: string = '';
  notification: Notification[] = [];
  background: string = '';
  timeUsed: number = 0;

  constructor(private developersService: DevelopersService, private serviceWeather: ServiceWeatherService ) {}

  ngOnInit(): void {
    this.getTopCharts();
    this.getReportsCommits();
    this.getServerDetails();
    this.getNotifications();
    this.getWeather();
  }

  getNotifications() {
    this.developersService.getNotificaction().subscribe((res) => {
      this.notification = res;
    });
  }

  getTopCharts() {
    this.developersService.getTopCharts().subscribe((res) => {
      (this.projectsInDeploy = res.projects),
        (this.projectsInDeploy = res.projects_dev);
      this.totalNcs = res.peding_nc;
      this.totalErrors = res.errors_deploy;
    });
  }

  getReportsCommits() {
    this.developersService.getCommitsReports().subscribe((res) => {
      this.dataCommits = res;
      this.renderReportCommits();
    });
  }

  getServerDetails() {
    this.developersService.getSeerverDetails().subscribe((res) => {
      this.dataServer = res;
      this.timeUsed =  res.percentaje_time; 
      this.totalProjectDeploy = res.deploys;

      this.renderServerChart();
    });
  }


  getWeather() {
    const cityName = 'Cali';
  
    this.serviceWeather.getWeather(cityName).subscribe((res) => {
      console.log(res);
  
      const weather = res.list[0];
      const weatherDescription = weather.weather[0].description;
      const weatherIcon = weather.weather[0].icon;
      const currentTime = new Date().getHours();
      let backgroundColor;
  
      const isClearOrFewClouds = weatherDescription.includes('clear') || weatherDescription.includes('few clouds');
  
      if (currentTime >= 6 && currentTime < 18) {
        backgroundColor = isClearOrFewClouds ? 'yellow' : 'otherDayColor';
      } else {
        backgroundColor = isClearOrFewClouds ? 'darkblue' : 'otherNightColor';
      }
  
      this.setBackgroundColor(backgroundColor);
    });
  }
  
  setBackgroundColor(color: string) {
    this.background = color;
  }

  renderServerChart() {
    const times = this.dataServer.time.map((res) => res.time);
    const values = this.dataServer.time.map((res) => res.value);

    new Chart('linechart', {
      type: 'line',
      data: {
        labels: times,
        datasets: [
          {
            label: 'Percentage Time',
            data: values,
            fill: false,
            borderColor: '#007bff',
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  renderReportCommits() {
    const months = this.dataCommits.map((commit) => commit.month);
    const feats = this.dataCommits.map((commit) => commit.feat);
    const fixes = this.dataCommits.map((commit) => commit.fix);

    new Chart('piechart', {
      type: 'bar',
      data: {
        labels: months.map((month) => `Month ${month}`),
        datasets: [
          {
            label: 'Features',
            data: feats,
            backgroundColor: '#19A7CE',
            borderColor: '#19A7CE',
            borderWidth: 1,
          },
          {
            label: 'Fixes',
            data: fixes,
            backgroundColor: '#FF6000',
            borderColor: '#FF6000',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  renderDeliveryChart() {
    const topProjectsLabels = this.dataReport.top_projects.map(
      (project) => project.name
    );
    const topProjectsValues = this.dataReport.top_projects.map((project) =>
      parseInt(project.porcentaje)
    );

    const data = {
      labels: topProjectsLabels,
      datasets: [
        {
          label: 'Top Projects',
          data: topProjectsValues,
          backgroundColor: [
            '#007bff',
            '#28a745',
            '#ffc107',
            '#dc3545',
            '#17a2b8',
            '#6610f2',
          ],
          borderWidth: 1,
        },
      ],
    };

    new Chart('reportChart', {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Top Projects',
          },
        },
      },
    });
  }
}