# Generated by Django 4.1.5 on 2023-04-30 00:48

import builtins
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='books',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='any', max_length=100)),
                ('author', models.CharField(default='any', max_length=100)),
                ('image', models.ImageField(default=builtins.any, upload_to='')),
                ('available', models.BooleanField(default=False)),
            ],
        ),
    ]
