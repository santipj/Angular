import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval,take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {


    // this.retornaObservable().subscribe(
    //   valor => console.log('Subs', valor),
    //   err => console.warn('Error', err),
    //   () => console.info('Obs terminado')

    // )

    this.intervalSubs = this.retornaIntervalo().
    subscribe(console.log )

  }
  
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  };


  retornaIntervalo(): Observable<number>  {
    return interval(500)
    .pipe(
      // take(10),
      map( valor => valor + 1),
      filter(valor => (valor%2 === 0)? true : false ),
    ) ;


  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {

        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          console.log('i = 2.... error')
          observer.error('i llego la error de 2');
        }

      }, 1000)
    });
  };







}
