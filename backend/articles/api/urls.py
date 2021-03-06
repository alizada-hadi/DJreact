from django.urls import path
from . import views


urlpatterns = [
    path("", views.ArticleListView.as_view(), name='article-list'),
    path("create/", views.ArticleCreateView.as_view(),  name="article-create"),
    path("<int:pk>/", views.ArticleDetailView.as_view(), name="article-detail"),
    path("<int:pk>/delete/", views.ArticleDeleteView.as_view(),
         name="article-delete"),
    path("<int:pk>/update/", views.ArticleUpdateView.as_view(), name="article-update")
]
