import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';
// {Event as RouterEvent} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})

export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string = '';
  public tituloSubs$: Subscription = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute) {

    console.log(route.snapshot.children[0].data);
    

  //   this.tituloSubs$ = this.getArgumentosRuta()
  //     .subscribe(
  //       ({ titulo }) => {
  //         this.titulo = titulo;
  //         document.title = `AdminPro - ${titulo}`;
  //       })
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }


  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd && event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )

  }

}
