import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements AfterViewInit {
  formSubmitted = false;

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
    }, 100);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const subject = (form.querySelector('#form-subject') as HTMLInputElement)?.value;
    const message = (form.querySelector('#form-message') as HTMLTextAreaElement)?.value;

    if (subject && message) {
      const mailtoLink = `mailto:bermasjaybee9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      this.formSubmitted = true;
      form.reset();
      setTimeout(() => this.formSubmitted = false, 3000);
    }
  }
}
