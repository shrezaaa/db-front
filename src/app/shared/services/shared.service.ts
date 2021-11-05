import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { GlobalService } from "src/app/core/services/global.service";
import { ApiRequest } from "src/app/core/services/request.service";
import { SelectData } from "../types/select-data";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private issuedCountries$: BehaviorSubject<SelectData[]>;
  private regiones$: BehaviorSubject<SelectData[]>;

  constructor(private gs: GlobalService) {
    this.issuedCountries$ = new BehaviorSubject<SelectData[]>([]);
    this.regiones$ = new BehaviorSubject<SelectData[]>([]);
  }

  public get issuedCountries(): Observable<SelectData[]> {
    return this.issuedCountries$.asObservable();
  }

  public get regions(): Observable<SelectData[]> {
    return this.regiones$.asObservable();
  }

  getIssuedCountries() {
    ApiRequest("GET", true)
      .controller("IssueCountry")
      .action("Search")
      .call(this.gs)
      .subscribe(({ data }) => {
        let issuedCountries = [];
        if (Array.isArray(data.Country)) {
          data.Country.forEach((country) => {
            issuedCountries.push({
              name: country.CountryName,
              value: country.CountryID,
            });
          });
          this.issuedCountries$.next([...issuedCountries]);
        }
      });
  }

  getRegions(CountryID: number = null) {
    ApiRequest("GET", true)
      .controller("Region")
      .action("Search")
      .addParam("CountryID", CountryID)
      .call(this.gs)
      .subscribe(({ data }) => {
        let regions = [];
        if (Array.isArray(data.Region)) {
          data.Region.forEach((region) => {
            regions.push({
              name: region.RegionName,
              value: region.RegionID,
            });
          });
          this.regiones$.next([...regions]);
        }
      });
  }
}
