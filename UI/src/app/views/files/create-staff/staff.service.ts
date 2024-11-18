import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = 'http://localhost:8080/api/create-staff';  // Adjust the API URL

  constructor(private http: HttpClient) {}

  // Method to add a new staff
  addStaff(data: any): Observable<any> {
    console.log('Adding staff data:', data); // Log data being sent
    return this.http.post<any>(this.apiUrl, data);
  }

  // Method to update existing staff
  updateStaff(id: number, data: any): Observable<any> {
    console.log('Updating staff data:', data); // Log data being sent
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  // Method to get all staff
  getAllStaff(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Method to delete staff
  deleteStaff(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
