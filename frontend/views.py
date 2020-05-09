from django.shortcuts import render
from django.views import generic

from todos.models import Todo


def index(request):
    return render(request, 'frontend/index.html')

class TodoDetailView(generic.DetailView):
    model = Todo
    template_name = 'frontend/index.html'

"""
class IndexView(generic.ListView):
    template_name = 'template name here'
    context_object_name = ''

    def get_queryset(self):
        return yourModel.objects.all()
        # it will return in a variable named object_list if you wnat to use other name then write it context_object_name above
"""