import { Injectable } from '@angular/core';
import {Session} from '../../model/session/session';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import {UserService} from '../user/user.service';
import {User} from '../../model/user/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    private url = 'http://localhost:8200/jtech/sessions/';
    private allSessions: Observable<Session[]> = null;
    constructor(private userService: UserService,
                private http: HttpClient) { }

    /**
     * @param id of the user
     * @return all sessions of this user
     */
    public getSessionsById(id: string): Observable<Session[]> {
            this.allSessions = this.http.get<Session[]>(`${this.url}${id}`);
            return this.allSessions;
    }

    /**
     * @param id of the session
     * @return session of this id
     */
    public getCurrentSession(id: string): Observable<Session> {
        return this.allSessions.pipe(take(1), map((sessions: Session[]) => {
            return sessions.find((session: Session) => session.id === id);
        }));
    }
}
